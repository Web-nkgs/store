import { GraphQLClientSingleton } from "app/graphql";
import { customerInfo } from "app/graphql/queries/customerInfo";
import { decrypt } from "app/lib";
import { cookies } from "next/headers";

export const validateAccessToken = async () => {
  const cookieStore = cookies();
  const accessTokenEncrypted = cookieStore.get("accessToken")?.value;
  if (!accessTokenEncrypted) return;
  const accessTokenInfo = await decrypt(accessTokenEncrypted);

  const graphqlClient = await GraphQLClientSingleton.getInstance().getClient();
  const { customer } = await graphqlClient.request(customerInfo, {
    customerAccessToken: accessTokenInfo.accessToken,
  });

  return customer;
};

import { GraphQLClientSingleton } from "app/graphql";
import { customerInfo } from "app/graphql/queries/customerInfo";
import { cookies } from "next/headers";

export const validateAccessToken = async () => {
  const cookieStore = cookies();
  const accesToken = cookieStore.get("accessToken")?.value;
  if (!accesToken) return
  
  const graphqlClient = await GraphQLClientSingleton.getInstance().getClient();
  const { customer } = await graphqlClient.request(customerInfo, {
    customerAccessToken: accesToken,
  });
  console.log("customer: ", customer);
  return customer
};

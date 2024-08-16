import { GraphQLClientSingleton } from "app/graphql";
import { customerAccessTokenCreateMutation } from "app/graphql/mutations/customerAccessTokenCreate";
import { encrypt } from "app/lib";
import { cookies } from "next/headers";

export const createAccessToken = async (email: string, password: string) => {
  const cookiesStore = cookies();
  const graphqlClient = GraphQLClientSingleton.getInstance().getClient();
  const { customerAccessTokenCreate }: any = await graphqlClient.request(
    customerAccessTokenCreateMutation,
    {
      email,
      password,
    }
  );
  
  // to make it more secure we can also encrypt the access token.
  const { accessToken, expiresAt } = customerAccessTokenCreate?.customerAccessToken;

  const accessTokenEncrypted = await encrypt({accessToken, expiresAt})

  if (accessTokenEncrypted) {
    cookiesStore.set("accessToken", accessTokenEncrypted, {
      path: "/",
      expires: new Date(expiresAt),
      httpOnly: true,
      // cookie can only be used in our site
      sameSite: "strict",
    });

    return accessToken
  }
};

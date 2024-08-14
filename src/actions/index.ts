// this indicates no matter what execute on server (irrelevant wether we're on client/server).
// Server actions only execute an action, they don't return a response like an endpoint, but they can return a value.
"use server";

import { GraphQLClientSingleton } from "app/graphql";
import { createCartMutation } from "app/graphql/mutations/createCartMutation";
import { createUserMutation } from "app/graphql/mutations/createUserMutation";
import { decrypt } from "app/lib";
import { createAccessToken } from "app/utils/auth/createAccessToken";
import { validateAccessToken } from "app/utils/auth/validateAccessToken";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const handleCreateUser = async (formData: FormData) => {
  const formDataObject = Object.fromEntries(formData);
  delete formDataObject["password_confirmation"];
  const graphqlClient = GraphQLClientSingleton.getInstance().getClient();
  const graphQlvariables = {
    input: {
      ...formDataObject,
      phone: "+591" + formDataObject.phone,
    },
  };

  const { customerCreate } = await graphqlClient.request(
    createUserMutation,
    graphQlvariables
  );

  const { customerUserErrors, customer } = customerCreate;

  if (customer?.firstName) {
    await createAccessToken(
      formDataObject.email as string,
      formDataObject.password as string
    );

    redirect("/store");
  }
};

export const handleLogin = async (formData: FormData) => {
  const formDataObject = Object.fromEntries(formData);
  const accessToken = await createAccessToken(
    formDataObject.email as string,
    formDataObject.password as string
  );

  if (accessToken) {
    redirect("/store");
  }
};

export const handleCreateCart = async (cartItems: CartItem[]) => {
  const cookiesStore = cookies();
  const accessTokenEncrypted = cookiesStore.get("accessToken")?.value as string;

  if (!accessTokenEncrypted) return redirect("/login");
  const accessTokenInfo = await decrypt(accessTokenEncrypted);

  const graphqlClient = GraphQLClientSingleton.getInstance().getClient();
  const customer = await validateAccessToken();

  const variables = {
    input: {
      buyerIdentity: {
        customerAccessToken: accessTokenInfo.accessToken,
        email: customer?.email,
      },
      lines: cartItems.map((item) => ({
        merchandiseId: item.merchandiseId,
        quantity: item.quantity,
      })),
    },
  };

  const {
    cartCreate,
  }: {
    cartCreate?: {
      cart?: {
        checkoutUrl: string;
      };
    };
  } = await graphqlClient.request(createCartMutation, variables);

  return cartCreate?.cart?.checkoutUrl;
};

// this indicates no matter what execute on server (irrelevant wether we're on client/server).
// Server actions only execute an action, they don't return data.
"use server";

import { GraphQLClientSingleton } from "app/graphql";
import { createUserMutation } from "app/graphql/mutations/createUserMutation";

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
  console.log("customer: ", customer);
  console.log("customerUserErrors: ", customerUserErrors);
};

import { gql } from "graphql-request";

export const customerInfo = gql`
  query customerName($customerAccessToken: String!) {
    customer(customerAccessToken: $customerAccessToken) {
      firstName
      email
    }
  }
`;

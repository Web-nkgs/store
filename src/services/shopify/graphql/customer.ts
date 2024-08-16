import { GraphQLClientSingleton } from "app/graphql"
import { getOrdersQuery } from "app/graphql/queries/getOrders"
import { decrypt } from "app/lib"
import { GraphQLClient } from "graphql-request"
import { cookies } from "next/headers"

export const getCustomerOrders = async () => {
    const cookieStorage = cookies()
    const encryptedAccessToken = cookieStorage.get("accessToken")?.value || ""
    const accessTokenInfo = await decrypt(encryptedAccessToken)

    const grapghqlClient = GraphQLClientSingleton.getInstance().getClient()
    const variables = {
        customerAccessToken: accessTokenInfo.accessToken
    }

    const { customer } = await grapghqlClient.request(getOrdersQuery, variables)
    const orders = customer.orders.edges.map((edge: any) => edge.node)
    return {
        totalOrders: customer.orders.totalCount,
        orders
    }
}
import { getCustomerOrders } from "app/services/shopify/graphql/customer";
import { validateAccessToken } from "app/utils/auth/validateAccessToken";

export default async function MyAccountPage() {
    const customer = await validateAccessToken()

    type OrderType = {
        name: string;
        orderNumber: number;
        statusUrl: string
        lineItems: {
            edges: Array<{
                node: {
                    currentQuantity: number;
                    title: 2
                }
            }>
        }
    }

    const ordersInfo = await getCustomerOrders()

    return (
        <section>
            <h2>Ordenes</h2>
            {ordersInfo.orders?.map((order: OrderType) => (
                <p key={order.orderNumber}>{order.orderNumber}</p>
            ))}
        </section>
    )

}
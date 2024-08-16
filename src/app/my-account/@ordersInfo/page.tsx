import { getCustomerOrders } from "app/services/shopify/graphql/customer";
import { validateAccessToken } from "app/utils/auth/validateAccessToken";

export default async function MyAccountPage() {
    const customer = await validateAccessToken()
    const ordersInfo = await getCustomerOrders()

    return (
        <section>
            <h2>Orderenes</h2>
            {ordersInfo.orders?.map((order) => (
                <p key={order.orderNumber}>{order.orderNumber}</p>
            ))}
        </section>
    )

}

interface MyAccountLayoutProps {
    children: React.ReactNode,
    usersInfo: React.ReactNode,
    ordersInfo: React.ReactNode,
}

export default async function MyAccountLayout(props: MyAccountLayoutProps) {

    return (
        <div>
            {props.children}
            {props.usersInfo}
            {props.ordersInfo}
        </div>
    )

}
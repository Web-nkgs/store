"use client"
import { useShoppingCart } from "app/hooks/useShoppingCart"
import { useState } from "react"
import { FaShoppingCart } from "react-icons/fa"
import styles from "./ShoppingCart.module.sass"
import { ShoppingCartItem } from "./ShoppingCartItem"

// Transform it to component that doesn't re-render, utility from Next Dynamic.
export default function ShoppingCart() {
    const { cart } = useShoppingCart()
    const [isCartItemsOpen, setIsCartItemsOpen] = useState(false)

    const handleIsCartItemsOpen = () => {
        setIsCartItemsOpen(!isCartItemsOpen)
    }
    console.log("cart: ", cart);
    
    return <div className={styles.ShoppingCart}>
        <button
            onClick={handleIsCartItemsOpen}
            className={styles.ShoppingCart__cartButton}>
            <span className={styles.ShoppingCart__counter}>
                {cart.length}
            </span>
            <FaShoppingCart />
        </button>
        {
            isCartItemsOpen && cart.length > 0 &&
            <div className={styles.ShoppingCart__items}>
                {
                    cart.map((item) => (
                        <div key={item.id}>
                            <ShoppingCartItem item={item} />
                            <hr />
                        </div>
                    ))
                }
                <button className={styles.ShoppingCart__buyButton}>Buy</button>
            </div>
        }
    </div>
}
"use client"
import { useShoppingCart } from "app/hooks/useShoppingCart"
import { useState } from "react"
import { FaShoppingCart } from "react-icons/fa"
import styles from "./ShoppingCart.module.sass"
import { ShoppingCartItem } from "./ShoppingCartItem"
import { handleCreateCart } from "app/actions"

// Transform it to component that doesn't re-render, utility from Next Dynamic.
export default function ShoppingCart() {
    const { cart } = useShoppingCart()
    const [isBuying, setIsBuying] = useState(false)
    const [isCartItemsOpen, setIsCartItemsOpen] = useState(false)
    
    const handleIsCartItemsOpen = () => {
        setIsCartItemsOpen(!isCartItemsOpen)
    }

    const handleBuy = async () => {
        try {
            setIsBuying(true)
            const checkoutUrl = await handleCreateCart(cart)
            if (!checkoutUrl) throw new Error('Error creating checkout')
            window.localStorage.removeItem('cart')
            window.location.href = checkoutUrl
        } catch (error) {
            setIsBuying(false)
        }
    }

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
                <button
                    onClick={handleBuy}
                    disabled={isBuying}
                    className={styles.ShoppingCart__buyButton}>Buy</button>
            </div>
        }
    </div>
}
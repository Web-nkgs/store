"use client"
import { useState } from "react"
import { FaShoppingCart } from "react-icons/fa"
import styles from "./ShoppingCart.module.sass"

export const ShoppingCart = () => {
    const [itemsCounter, setItemsCounter] = useState(0)

    return <button className={styles.ShoppingCart}>
        <span className={styles.ShoppingCart__counter}>
            {itemsCounter}
        </span>
        <FaShoppingCart />
    </button>
}
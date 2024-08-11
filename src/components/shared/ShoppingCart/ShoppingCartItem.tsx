"use client"
import Image from "next/image"
import { FaTrash } from "react-icons/fa"
import styles from './ShoppingCartItem.module.sass'
import { useShoppingCart } from "app/hooks/useShoppingCart"

interface ShoppingCartItemProps {
    item: CartItem
}

export const ShoppingCartItem = ({ item }: ShoppingCartItemProps) => {

    const { removeCartItem } = useShoppingCart()

    return <div className={styles.ShoppingCartItem}>
        <Image
            src={item.image}
            width={50}
            height={50}
            alt={item.title} />
        <label>{item.title}</label>
        <label>x{item.quantity}</label>
        <button onClick={() => removeCartItem(item)}>
            <FaTrash />
        </button>
    </div>
}
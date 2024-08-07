"use client"
import { FormEvent } from "react";
import styles from "./LoginForm.module.sass";
import { handleLogin } from "app/actions";

export const LoginForm = () => {

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        await handleLogin(formData)
    }

    return (
        <div className={styles.NewAccountForm}  >
            <h1 className={styles.NewAccountForm__title}>Login</h1>
            <form className={styles.NewAccountForm__form} onSubmit={(e) => { handleSubmit(e) }}>
                <input type="text" name="email" placeholder="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" />
                <input type="password" name="password" placeholder="password" />
                <input type="submit" name="submit" value="Login" />
            </form>
        </div>
    );
}
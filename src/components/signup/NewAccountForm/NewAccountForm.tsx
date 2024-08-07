"use client"
import { FormEvent, FormEventHandler, useState } from "react"
import styles from "./NewAccountForm.module.sass";
import { handleCreateUser } from "app/actions";

export const NewAccountForm = () => {
    const [errors, setErrors] = useState<string[]>([])
    const [loading, setLoading] = useState<boolean>(false)

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        
        const formData = new FormData(event.currentTarget)
        await handleCreateUser(formData)
    }

    return (
        <div className={styles.NewAccountForm}>
            <h1 className={styles.NewAccountForm__title}>New Account</h1>
            <form className={styles.NewAccountForm__form} onSubmit={(e) => {handleSubmit(e)}}>
                <div className={styles.NewAccountForm__namesContainer}>
                    <input type="text" name="firstName" placeholder="Name" disabled={loading} />
                    <input type="text" name="lastName" placeholder="Lastname" disabled={loading} />
                </div>
                <div className={styles.NewAccountForm__otherFieldsContainer}>
                    <input type="text" name="email" placeholder="email" pattern="^[^@]+@[^@]+\.[^@]+$" disabled={loading} />
                    <input type="text" name="phone" placeholder="phone number" pattern="^[0-9]*$" disabled={loading} />
                    <input type="password" name="password" placeholder="password" disabled={loading} />
                    <input type="password" name="password_confirmation" placeholder="re-type password" disabled={loading} />
                    <input type="submit" name="submit" value="Crear cuenta" disabled={loading} />
                </div>
            </form>
            {errors.length > 0 &&
                <div>
                    {errors.map((error, index) => {
                        return <p key={index} className={styles.NewAccountForm__error}>{error}</p>
                    })}
                </div>
            }
        </div>
    )

}
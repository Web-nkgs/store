import styles from './Footer.module.sass';

export const Footer = () => {
    return <footer className={styles.Footer}>
        <p>Footer Future World © {new Date().getFullYear()}</p>
    </footer>
}
import styles from './Hero.module.css'

export const Hero = () => {
    console.log(styles);
    
    return <section className={styles.hero}>
        <h1>Future world</h1>
        <h2>Empowering your tomorrow, today!</h2>
    </section>
}
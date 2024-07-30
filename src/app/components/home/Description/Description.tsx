import styles from './Description.module.sass'

export const Description = () => {
    return <section className={styles.Description}>
        {/* we could access directly the directories in public (images, videos, files, etc.) anything static. 
        TIP: Only add super necessary static elements to you app. If you have too much images/videos, a better
        solution is a cloud bucket like S3.
        */}
        <img src="/images/description.jpeg" alt="product marketplace" />
        <div className={styles.Description__text}>
            <h2>Bring the future today</h2>
            <p>Future World: Your Gateway to Tomorrow's Tech! Dive into a world of cutting-edge gadgets and gear. Stay ahead of the curve and redefine your digital lifestyle with us.</p>
        </div>
    </section>
}
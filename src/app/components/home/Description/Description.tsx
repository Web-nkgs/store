import styles from './Description.module.sass'
import Image from 'next/image'

export const Description = () => {
    return <section className={styles.Description}>
        {/* we could access directly the directories in public (images, videos, files, etc.) anything static. 
        TIP: Only add super necessary static elements to you app. If you have too much images/videos, a better
        solution is a cloud bucket like S3.
        */}
        {/* priority={true} is for not using lazy loading, and loading the image upfront. 
        This is only recommended to deactivate (lazy loading) when the image is heavy and we need to upload it upfront. 
        quality by defaul is 75%. */}
        <Image 
        src="/images/description.jpeg" 
        alt="product marketplace" 
        width={500} 
        height={300}
        priority={true}
        layout='responsive'
        quality={50} />
        <div className={styles.Description__text}>
            <h2>Bring the future today</h2>
            <p>Future World: Your Gateway to Tomorrow's Tech! Dive into a world of cutting-edge gadgets and gear. Stay ahead of the curve and redefine your digital lifestyle with us.</p>
        </div>
    </section>
}
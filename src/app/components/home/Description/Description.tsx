"use client"
// components
import Image from 'next/image'

// dependencies
import classNames from 'classnames/bind'

// react 
import { MouseEventHandler, useState } from 'react'

// styles
import styles from './Description.module.sass'



const PLACEHOLER_IMAGE = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCABvAG8DASIAAhEBAxEB/8QAGgAAAwEBAQEAAAAAAAAAAAAAAgMEAQUABv/EAB0QAAMBAAIDAQAAAAAAAAAAAAABAgMRIQQSMUH/xAAYAQEBAQEBAAAAAAAAAAAAAAADAgQBAP/EABkRAQEBAQEBAAAAAAAAAAAAAAABAhEDEv/aAAwDAQACEQMRAD8A+G4PB8GNDSqoDUbwakNGfUbI6BcofCPVMhkIdK6BiR0yZ9myHgGkO9QakIsqW0T2iy5JtUJhypLEsfohLNOQVZ6mOR/qC5M0rTYTweSDaPJDZodRsofnIEIozkuo4ZnJRMGZyURAOlQv0BqCtQBUBcV1z9IJNZOnrBDtJWXuudqievpXsial2aM1NjqtANDmgGjHK0ktGJBsxGjNRYOEVZInzK8UIKxTlJVE9CckVwg9JYpBuShLoG0HXOufrJBuvp1Nkc/yF9OxUrl7rsjv6W7kd/RZXXYYFGtgUzJD9AzEZTMTHy8fmWYkWbK8WIjUdDIrz/CLFlmbJoaegLNTBthoS7HO8j9OhuzneQ/p2Kjm+R+kV/SzyH9Ir+iQkdN0BVC3YFWZ5FTQnRioVVGKhcklV50WY0c3OivKy3LHUxoszo5mVlWdkWh1FyoG6EqwaskdgdqOf5FFOtkO9HY9EW7I7fZTs+ySn2JFynOwXYj3Bdk/KJs52YrEOzyorh8VZFlWVnNiynOybSuploVRocvOymNCLUajoLQytCRaHnoT0Ng9LI9qDuyXWi4gnV8k1PsboxDYsc6n9j3sK5Pcl8Z86M9jyoXyamTWzzp80Pzoklj4YWmqLc7KIsihj5YVesVKzzsSma2egdRt0IugqfQqxMh0VbFNh2LY0HX/2Q=='

export const Description = () => {
    const [hasBorder, setHasBorder] = useState(false)

    const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault()
        setHasBorder(!hasBorder)
    }

    const context = classNames.bind(styles)

    const buttonStyles = context('Description__button', {
        'Description__button--border': hasBorder
    })

    console.log(buttonStyles);

    return <section className={styles.Description}>
        {/* we could access directly the directories in public (images, videos, files, etc.) anything static. 
        TIP: Only add super necessary static elements to you app. If you have too much images/videos, a better
        solution is a cloud bucket like S3.
        */}
        {/* priority={true} is for not using lazy loading, and loading the image upfront. 
        This is only recommended to deactivate (lazy loading) when the image is heavy and we need to upload it upfront. 
        quality by defaul is 75%. 
        The blur is used for static images, to show it more prettier on slow internet. */}
        <button onClick={(e) => handleClick(e)} className={buttonStyles}>
            <div className={styles.Description__imageContainer}>
                <Image
                    src="/images/description.jpeg"
                    alt="product marketplace"
                    fill
                    placeholder='blur'
                    blurDataURL={PLACEHOLER_IMAGE}
                    quality={50} />
            </div>
        </button>
        <div className={styles.Description__text}>
            <h2>Bring the future today</h2>
            <p>Future World: Your Gateway to Tomorrow's Tech! Dive into a world of cutting-edge gadgets and gear. Stay ahead of the curve and redefine your digital lifestyle with us.</p>
        </div>
    </section>
}
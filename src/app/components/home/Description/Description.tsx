export const Description = () => {
    return <section>
        {/* we could access directly the directories in public (images, videos, files, etc.) anything static. 
        TIP: Only add super necessary static elements to you app. If you have too much images/videos, a better
        solution is a cloud bucket like S3.
        */}
        <img src="/images/description.jpeg" alt="product marketplace" />
        <h2>Description</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam fuga assumenda, nulla quibusdam vitae quis ipsam aperiam ex eos iure ut? Harum iusto sed nam autem praesentium quas consequatur? Quibusdam.</p>
    </section>
}
interface CategoryProps {
    params: {
        category: string
    }
}

export default function Category(props: CategoryProps) {
    const { category } = props.params
    
    return <h1>Dynamic category: {category}</h1>
}
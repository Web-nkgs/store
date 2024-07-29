interface CategoryProps {
    params: {
        categories: string[]
    }
}

export default function Category(props: CategoryProps) {
    const { categories } = props.params
    console.log("categories params: ", categories);
    
    return <h1>Dynamic categories: {categories}</h1>
}
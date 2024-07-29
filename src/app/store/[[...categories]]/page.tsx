interface CategoryProps {
    params: {
        categories: string[]
    },
    searchParams: {
        search?: string;
    }
}

export default function Category(props: CategoryProps) {
    const { categories } = props.params
    const search = props.searchParams
    console.log("categories: ", categories);
    console.log("search: ", search);
    
    return <h1>Dynamic categories: {categories}</h1>
}
export interface Product {
    id: number,
    title: string,
    body_html: string,
    vendor: string,
    handle: string,
    published_scope: string,
    tags: string,
    status: string,
    admin_graphql_api_id: string,
    image: {
      id: number,
      alt: string | null,
      product_id: number,
      admin_graphql_api_id: string,
      width: number,
      height: number,
      src: string,
    }
}
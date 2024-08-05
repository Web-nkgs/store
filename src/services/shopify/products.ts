import { env } from "app/config/env";
import { shopifyUrls } from "./urls";

export const getProducts = async (
  id?: string
): Promise<ProductType[] | null> => {
  try {
    const apiUrl = id
      ? `${shopifyUrls.products.all}?ids=${id}`
      : shopifyUrls.products.all;
    const response = await fetch(apiUrl, {
      headers: new Headers({
        "X-Shopify-Access-Token": `${env.SHOPIFY_TOKEN}`,
      }),
    });
    const { products } = await response.json();

    const transformedProducts = products.map((product: any) => {
      return {
        id: product.id,
        gql_id: product.variants[0].admin_graphql_api_id,
        title: product.title,
        description: product.body_html,
        price: product.variants[0].price,
        image: product.images[0].src,
        quantity: product.variants[0].inventory_quantity,
        handle: product.handle,
        tags: product.tags,
      };
    });
    return transformedProducts;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getMainProducts = async () => {
  const response = await fetch(shopifyUrls.products.mainProducts, {
    headers: new Headers({
      "X-Shopify-Access-Token": `${env.SHOPIFY_TOKEN}`,
    }),
    // Options for cache
    // Option 1: by default NextJS caches the first time, and to reload data you must do a hard reload on the navigator.
    // cache: "force-cache"

    // Option 2: NextJS manages internally re-fetch of the data every x seconds.
    next: {
      revalidate: 28800
    }

    // Option 3: On normal reload data gets fetched again, since there's no cache.
    // cache: "no-cache"

  });

  const { products } = await response.json();
  return products;
};

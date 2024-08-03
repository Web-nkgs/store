import { getProducts } from "app/services/shopify";
import { NextResponse } from "next/server";
/* This architecture is called Back For Frontend (BFF). Allows use to hide the services we're using.
It's known as a proxy server, a server that'll receive the data.
*/

/* This is useful for:
* Use this on client components, cause it adds an extra layer for security, since if we consume the api's
directly we're exposing which services we're consuming, and it adds vulnerabiltity in sensitive data for example.
This aproach calls our api, and then we manage it internally in the NextJS server, without exposing to the client.
* In case any other FE wants to use the endpoints. 
*/
export async function GET() {
  const products = await getProducts();

  return NextResponse.json({ products });
}

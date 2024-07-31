/** @type {import('next').NextConfig} */
import path from 'path';
import { fileURLToPath } from 'url';

/* This configuration file is very important, here we'll set 
SASS compilers, dynamic imports, webpack configs.
*/


const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'src/sass')],
        prependData: `@import "main.sass"`
    },
    images: {
        remotePatterns: [
            {
                hostname: 'cdn.shopify.com',
                protocol: 'https'
            }
        ]
    }
}

export default nextConfig;

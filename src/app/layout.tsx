import { Inter } from "next/font/google";
import { Header } from "./components/shared/Header";
// the curly braces allows us to identify better where the error is.
import { Footer } from "./components/shared/Footer";

const inter = Inter({ subsets: ["latin"] });


// This file is super important, it's the wrapper to display the whole app.
/* When we do build of our app (either for dev or production mode), the 
directory .next directory is created. If you have any issues, it could be due to the 
.next directory, cause it caches styles/components. So to solve the issues just 
delete the .next directory.
*/
// Reused component across the whole app goes in root layout. example navbar and footer.
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>

    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Future world",
  description: "Generated by create next app",
};

// This file is super important, it's the wrapper to display the whole app.
/* When we do build of our app (either for dev or production mode), the 
directory .next directory is created. If you have any issues, it could be due to the 
.next directory, cause it caches styles/components. So to solve the issues just 
delete the .next directory.
*/
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}

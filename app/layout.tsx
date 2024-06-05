import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Component/Navbar";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Provider from "./Util/Provider";
import Footer from "./Component/Footer";
config.autoAddCss = false
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Twilight",
  description: "Twilight",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${inter.className}`}>
        <Provider>

          <div className="container mx-auto">
            <Navbar></Navbar>
          </div>

          {children}

          <div className="container mx-auto">
            <Footer></Footer>
          </div>

        </Provider>
      </body>
    </html>
  );
}

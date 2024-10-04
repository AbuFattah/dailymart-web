import { Poppins } from "next/font/google";
import "./globals.css";
import "@/fonts/line-awesome-1.3.0/css/line-awesome.css";
import "@/styles/index.scss";
import "rc-slider/assets/index.css";
import Footer from "@/shared/Footer/Footer";
import SiteHeader from "@/app/SiteHeader";
import CommonClient from "./CommonClient";
// import NavigationHeader from "@/app/NavigationHeader";
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: any;
}) {
  return (
    <html lang="en" dir="" className={poppins.className}>
      <body className="relative bg-white text-base dark:bg-neutral-900 text-neutral-900 dark:text-neutral-200">
        <div className="h-10 bg-slate-100 flex items-center">
          <div className="container">
            <p className="text-sm font-medium text-slate-600">
              Hotline: +8801533101637
            </p>
          </div>
        </div>
        <SiteHeader />
        {children}
        <CommonClient />
        <Footer />
      </body>
    </html>
  );
}

import AOSInitializer from "./AOSInitializer";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "../components/Top-nav/Navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "SHPE Club - Mt San Antonio College",
  description: "SHPE Club at Mount San Antonio College",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <head>
        {/* Add AOS CSS */}
        <link
          href="https://unpkg.com/aos@2.3.1/dist/aos.css"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar /> 
        <AOSInitializer />
        {children}
      </body>
    </html>
  );
}

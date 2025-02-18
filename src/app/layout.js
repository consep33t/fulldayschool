import localFont from "next/font/local";
import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
// import WaMe from "./components/WaMe";

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
  title: "FULDAYY CLASS SMP PANCA BUDI",
  description: "FULDAYY CLASS SMP PANCA BUDI",
  icons: {
    icon: "/LOGO PANCA BUDI.PNG",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavBar />
        <div className="pt-20">{children}</div>
        {/* <WaMe /> */}
        <Footer />
      </body>
    </html>
  );
}

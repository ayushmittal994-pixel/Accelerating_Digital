import Navbar from "../components/navbar";
import Footer from "../components/Footer";

import "./globals.css";

export const metadata = {
  title: "Accelerating Digital",
  description: "Accelerating ideas into impactful digital experiences",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col justify-between">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

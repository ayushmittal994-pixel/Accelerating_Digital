import Navbar from "../components/navbar"
import "./globals.css";

export const metadata = {
  title: "Accelerating Digital",
  description: "Accelerating ideas into impactful digital experiences",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar /> {/* ← shows on every page! */}
        {children}
      </body>
    </html>
  );
}

import Script from "next/script";
import "./globals.css";
import Header from "../components/layouts/Header.jsx";

export const metadata = {
  title: "perks",
  description: "All perks in one place",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="opacity-0" data-theme="">
       <head >
        <Script id="theme-script" strategy="beforeInteractive">
          {`
            document.documentElement.classList.add("opacity-0");
            const storedTheme = localStorage.getItem("theme");
            const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
            document.documentElement.dataset.theme = storedTheme || systemTheme;
            localStorage.theme = storedTheme || systemTheme;
            document.documentElement.classList.remove("opacity-0");
          `}
        </Script>
        </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}

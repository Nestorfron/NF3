import React from "react";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import "./styles/App.css";
import Footer from "./components/Footer.jsx";

function App({ Component, pageProps }) {
  
  return (
    <NextUIProvider {...pageProps}>
      <NextThemesProvider attribute="class" defaultTheme="dark">
        <Navbar />
        <Home />
        <Footer />
      </NextThemesProvider>
    </NextUIProvider>
  );
}

export default App;

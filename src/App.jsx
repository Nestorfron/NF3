import React from "react";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Thanks from "./pages/thanks.jsx";
import "./styles/App.css";
import Footer from "./components/Footer.jsx";

function App({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="dark">
        <BrowserRouter {...pageProps}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/thanks" element={<Thanks />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </NextThemesProvider>
    </NextUIProvider>
  );
}

export default App;

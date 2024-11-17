import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";
import { useTheme } from "next-themes";
import NF3Logo from "../assets/nf3.png";
import NF3LogoDark from "../assets/nf3_negro.png";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { theme, setTheme } = useTheme();
  const [isDark, setIsDark] = useState(theme === "dark");

  const toggleTheme = () => {
    const newTheme = isDark ? "light" : "dark";
    setTheme(newTheme);
    setIsDark(!isDark);
  };

  const menuItems = ["Profile"];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} isBordered maxWidth="full">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link href="/">
            {theme === "dark" ? (
              <img src={NF3Logo} alt="NF3" className="h-12 w-auto" />
            ) : (
              <img src={NF3LogoDark} alt="NF3" className="h-12 w-auto" />
            )}
            <p className="text-2xl font-bold text-primary">Magnement</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="primary" className="font-bold" href="/">
            Inicio
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/#about">
            Sobre mi
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/#skills">
            Habilidades
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/#projects">
            Proyectos
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/#contact">
            Contacto
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarItem className="flex items-center">
        <button onClick={toggleTheme}>
          {isDark ? (
            <SunIcon className="h-6 w-6" color="primary" variant="shadow" />
          ) : (
            <MoonIcon className="h-6 w-6" color="primary" variant="light" />
          )}
        </button>
      </NavbarItem>
      <NavbarMenu>
        <NavbarItem>
          <Link color="primary" className="font-bold" href="/">
            Inicio
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/#about">
            Sobre mi
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/#skills">
            Habilidades
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/#projects">
            Proyectos
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/#contact">
            Contacto
          </Link>
        </NavbarItem>
      </NavbarMenu>
    </Navbar>
  );
}

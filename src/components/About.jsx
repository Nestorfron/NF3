import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
  Button,
} from "@nextui-org/react";
import AboutImg from "../assets/about.jpg";

export default function About() {
  return (
    <Card id="about" className="about-card flex flex-col gap-4 m-2">
      <CardBody className="absolute z-10 m-auto p-5 mt-5">
        <h1 className="title p-5 m-auto">Sobre mi</h1>
        <h4 className="font-bold m-auto p-5 mt-5">
          Soy un apasionado Desarrollador Full Stack dedicado a construir
          soluciones digitales innovadoras y eficientes. Con experiencia en el
          diseño, desarrollo y despliegue de aplicaciones web completas, destaco
          tanto en tecnologías de front-end como de back-end. Disfruto colaborar
          con equipos, explorar nuevas herramientas y contribuir a proyectos
          impactantes. Siempre estoy en busca de nuevos desafíos para crecer
          profesionalmente y aportar valor con cada línea de código.
        </h4>
        <div className="m-auto p-5">
          <Link color="foreground" className="m-auto p-5 mt-5">
            <i className="fa-brands fa-facebook"></i>
          </Link>
          <Link color="foreground" className="m-auto p-5 mt-5">
            <i className="fa-brands fa-instagram"></i>
          </Link>
          <Link color="foreground" className="m-auto p-5 mt-5">
            <i className="fa-brands fa-github"></i>
          </Link>
        </div>
      </CardBody>
      <div className="about-Img">
        <Image
          removeWrapper
          alt="Relaxing app background"
          className="z-0 h-auto w-full"
          src={AboutImg}
        />
      </div>
    </Card>
  );
}

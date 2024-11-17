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
      <CardBody className="absolute z-10 m-auto p-5 mt-5 flex flex-col gap-4">
        <div className="flex flex-col">
          <h2 className="subtitle m-auto m-0 p-0">Nestor Frones</h2>
          <p className="m-auto">(Full Stack Developer)</p>
        </div>

        <h4 className="font-bold m-auto mt-5">
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
            <i class="fa-brands fa-instagram"></i>
          </Link>
          <Link
            color="foreground"
            className="m-auto p-5 mt-5"
            href="https://github.com/Nestorfron"
          >
            <i className="fa-brands fa-github"></i>
          </Link>
          <Link
            color="foreground"
            className="m-auto p-5 mt-5"
            href="https://www.linkedin.com/in/nestor-frones/"
          >
            <i class="fa-brands fa-linkedin-in"></i>
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

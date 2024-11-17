import React from "react";
import { Card, CardBody, CardFooter, Image, Link } from "@nextui-org/react";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.jpg";
import img6 from "../assets/6.jpg";
import img7 from "../assets/7.jpg";
import img8 from "../assets/8.jpg";

export default function Projects() {
 

  return (
    <Card id="projects" className="projects-card flex flex-col gap-4 m-2 mt-5 pt-5">
      <h1 className="title p-5 text-center text-bold mt-5">Proyectos</h1>
      <div className="m-2 p-3 pb-5 gap-2 grid grid-cols-2 sm:grid-cols-4">
        <Card className="card-projects bg-light" shadow="sm">
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt="Shop"
              className="w-full object-cover h-[180px]"
              src={img1}
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <h1 className="project-title">Tienda Virtual</h1>
            <div>
            <Link color="foreground">
              <i  className="project-icon fa-solid fa-code mr-2"></i>
            </Link>
            <Link color="foreground">
              <i  className="project-icon fa-solid fa-link mr-2"></i>
            </Link>
            </div>
          </CardFooter>
        </Card>
        <Card className="card-projects bg-light" shadow="sm">
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt="Shop"
              className="w-full object-cover h-[180px]"
              src={img2}
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <h1 className="project-title">Calculadora</h1>
            <div>
            <Link color="foreground">
              <i  className="project-icon fa-solid fa-code mr-2"></i>
            </Link>
            <Link color="foreground">
              <i  className="project-icon fa-solid fa-link mr-2"></i>
            </Link>
            </div>
          </CardFooter>
        </Card>
        <Card className="card-projects bg-light" shadow="sm">
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt="Shop"
              className="w-full object-cover h-[180px]"
              src={img3}
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <h1 className="project-title">Flexbox</h1>
            <div>
            <Link color="foreground">
              <i  className="project-icon fa-solid fa-code mr-2"></i>
            </Link>
            <Link color="foreground">
              <i  className="project-icon fa-solid fa-link mr-2"></i>
            </Link>
            </div>
          </CardFooter>
        </Card>
        <Card className="card-projects bg-light" shadow="sm">
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt="Shop"
              className="w-full object-cover h-[180px]"
              src={img4}
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <h1 className="project-title">Formulario</h1>
            <div>
            <Link color="foreground">
              <i  className="project-icon fa-solid fa-code mr-2"></i>
            </Link>
            <Link color="foreground">
              <i  className="project-icon fa-solid fa-link mr-2"></i>
            </Link>
            </div>
          </CardFooter>
        </Card>
        <Card className="card-projects bg-light" shadow="sm">
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt="Shop"
              className="w-full object-cover h-[180px]"
              src={img5}
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <h1 className="project-title">Reproductor</h1>
            <div>
            <Link color="foreground">
              <i  className="project-icon fa-solid fa-code mr-2"></i>
            </Link>
            <Link color="foreground">
              <i  className="project-icon fa-solid fa-link mr-2"></i>
            </Link>
            </div>
          </CardFooter>
        </Card>
        <Card className="card-projects bg-light" shadow="sm">
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt="Shop"
              className="w-full object-cover h-[180px]"
              src={img6}
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <h1 className="project-title">Web</h1>
            <div>
            <Link color="foreground">
              <i  className="project-icon fa-solid fa-code mr-2"></i>
            </Link>
            <Link color="foreground">
              <i  className="project-icon fa-solid fa-link mr-2"></i>
            </Link>
            </div>
          </CardFooter>
        </Card>
        <Card className="card-projects bg-light" shadow="sm">
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt="Shop"
              className="w-full object-cover h-[180px]"
              src={img7}
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <h1 className="project-title">Buscador</h1>
            <div>
            <Link color="foreground">
              <i  className="project-icon fa-solid fa-code mr-2"></i>
            </Link>
            <Link color="foreground">
              <i  className="project-icon fa-solid fa-link mr-2"></i>
            </Link>
            </div>
          </CardFooter>
        </Card>
        <Card className="card-projects bg-light" shadow="sm">
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt="Shop"
              className="w-full object-cover h-[180px]"
              src={img8}
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <h1 className="project-title">Carrito de compras</h1>
            <div>
            <Link color="foreground">
              <i  className="project-icon fa-solid fa-code mr-2"></i>
            </Link>
            <Link color="foreground">
              <i  className="project-icon fa-solid fa-link mr-2"></i>
            </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </Card>
  );
}

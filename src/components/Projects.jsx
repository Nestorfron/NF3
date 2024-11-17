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
import img9 from "../assets/9.jpg";

export default function Projects() {
  return (
    <Card
      id="projects"
      className="projects-card flex flex-col gap-4 m-2 mt-5 pt-5"
    >
      <h1 className="title p-5 text-center text-bold mt-5">Proyectos</h1>
      <div className="m-2 p-3 pb-5 gap-2 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4">
      <Card className="card-projects bg-light" shadow="sm">
          <CardBody className="overflow-visible p-0">
            <Image
              radius="lg"
              width="100%"
              alt="Shop"
              className="w-full object-cover h-[180px]"
              src={img9}
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <h1 className="project-title">Starwars Blog</h1>
            <div>
              <Link color="foreground" href="https://github.com/Nestorfron/starwars">
                <i className="project-icon fa-solid fa-code mr-2"></i>
              </Link>
              <Link color="foreground" href="https://starwars-omega-bay.vercel.app/">
                <i class="project-icon fa-solid fa-arrow-up-right-from-square mr-2"></i>
              </Link>
            </div>
          </CardFooter>
        </Card>
        <Card className="card-projects bg-light" shadow="sm">
          <CardBody className="overflow-visible p-0">
            <Image
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
              <Link color="foreground" href="https://github.com/Nestorfron/bootstrap5">
                <i className="project-icon fa-solid fa-code mr-2"></i>
              </Link>
              <Link color="foreground" href="https://bootstrap5-f9a71xn54-nestorfron.vercel.app/">
                <i class="project-icon fa-solid fa-arrow-up-right-from-square mr-2"></i>
              </Link>
            </div>
          </CardFooter>
        </Card>
        <Card className="card-projects bg-light" shadow="sm">
          <CardBody className="overflow-visible p-0">
            <Image
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
              <Link color="foreground" href="https://github.com/Nestorfron/calculadora">
                <i className="project-icon fa-solid fa-code mr-2"></i>
              </Link>
              <Link color="foreground" href="https://calculadora-a2928sxoj-nestorfron.vercel.app/">
                <i class="project-icon fa-solid fa-arrow-up-right-from-square mr-2"></i>
              </Link>
            </div>
          </CardFooter>
        </Card>
        <Card className="card-projects bg-light" shadow="sm">
          <CardBody className="overflow-visible p-0">
            <Image
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
              <Link color="foreground" href="https://github.com/Nestorfron/Flexbox">
                <i className="project-icon fa-solid fa-code mr-2"></i>
              </Link>
              <Link color="foreground" href="https://flexbox-gu3mppo1z-nestorfron.vercel.app/">
                <i class="project-icon fa-solid fa-arrow-up-right-from-square mr-2"></i>
              </Link>
            </div>
          </CardFooter>
        </Card>
        <Card className="card-projects bg-light" shadow="sm">
          <CardBody className="overflow-visible p-0">
            <Image
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
              <Link color="foreground" href="https://github.com/Nestorfron/Reproductor">
                <i className="project-icon fa-solid fa-code mr-2"></i>
              </Link>
              <Link color="foreground" href="https://reproductor-cceb1fpgb-nestorfron.vercel.app/">
                <i class="project-icon fa-solid fa-arrow-up-right-from-square mr-2"></i>
              </Link>
            </div>
          </CardFooter>
        </Card>
        <Card className="card-projects bg-light" shadow="sm">
          <CardBody className="overflow-visible p-0">
            <Image
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
              <Link color="foreground" href="https://github.com/Nestorfron/Startup1">
                <i className="project-icon fa-solid fa-code mr-2"></i>
              </Link>
              <Link color="foreground" href="https://startup1-pzs7izc3l-nestorfron.vercel.app/">
                <i class="project-icon fa-solid fa-arrow-up-right-from-square mr-2"></i>
              </Link>
            </div>
          </CardFooter>
        </Card>
        <Card className="card-projects bg-light" shadow="sm">
          <CardBody className="overflow-visible p-0">
            <Image
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
              <Link color="foreground" href="https://github.com/Nestorfron/buscador-imagenes">
                <i className="project-icon fa-solid fa-code mr-2"></i>
              </Link>
              <Link color="foreground" href="https://buscador-imagenes-jnl7rj152-nestorfron.vercel.app/">
                <i class="project-icon fa-solid fa-arrow-up-right-from-square mr-2"></i>
              </Link>
            </div>
          </CardFooter>
        </Card>
        <Card className="card-projects bg-light" shadow="sm">
          <CardBody className="overflow-visible p-0">
            <Image
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
              <Link color="foreground" href="https://github.com/Nestorfron/carro-de-compras">
                <i className="project-icon fa-solid fa-code mr-2"></i>
              </Link>
              <Link color="foreground" href="https://carro-de-compras-1z7mma2v6-nestorfron.vercel.app/">
                <i class="project-icon fa-solid fa-arrow-up-right-from-square mr-2"></i>
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </Card>
  );
}

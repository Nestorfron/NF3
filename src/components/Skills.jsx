import React from "react";
import { Card, CardBody, CardFooter } from "@nextui-org/react";

export default function Skills() {
  return (
    <div id="skills">
      <h1 className="title p-5 text-center text-bold">Habilidades</h1>
      <div className="m-2 gap-2 grid grid-cols-2 sm:grid-cols-4">
        <Card className="card-skills">
          <CardBody>
            <i
              className="skills fa-brands fa-css3-alt text-center"
              color="foreground"
            ></i>
          </CardBody>
          <CardFooter className="justify-around">
            <h1 className="text-center text-bold">CSS</h1>
          </CardFooter>
        </Card>
        <Card className="card-skills">
          <CardBody>
            <i
              className="skills fa-brands fa-html5 text-center"
              color="foreground"
            ></i>
          </CardBody>
          <CardFooter className="justify-around">
            <h1 className="text-center text-bold">HTML</h1>
          </CardFooter>
        </Card>
        <Card className="card-skills">
          <CardBody>
            <i
              className="skills fa-brands fa-react text-center"
              color="foreground"
            ></i>
          </CardBody>
          <CardFooter className="justify-around">
            <h1 className="text-center text-bold">React</h1>
          </CardFooter>
        </Card>
        <Card className="card-skills">
          <CardBody>
            <i
              className="skills fa-brands fa-node-js text-center"
              color="foreground"
            ></i>
          </CardBody>
          <CardFooter className="justify-around">
            <h1 className="text-center text-bold">Node.js</h1>
          </CardFooter>
        </Card>
        <Card className="card-skills">
          <CardBody>
            <i
              className="skills fa-brands fa-bootstrap text-center"
              color="foreground"
            ></i>
          </CardBody>
          <CardFooter className="justify-around">
            <h1 className="text-center text-bold">Bootstrap</h1>
          </CardFooter>
        </Card>
        <Card className="card-skills">
          <CardBody>
            <i
              className="skills fa-brands fa-sass text-center"
              color="foreground"
            ></i>
          </CardBody>
          <CardFooter className="justify-around">
            <h1 className="text-center text-bold">Sass</h1>
          </CardFooter>
        </Card>
        <Card className="card-skills">
          <CardBody>
            <i className="skills fa-solid fa-database text-center" color="foreground"></i>
          </CardBody>
          <CardFooter className="justify-around">
            <h1 className="text-center text-bold">MySQL</h1>
          </CardFooter>
        </Card>
        <Card className="card-skills">
          <CardBody>
            <i
              className="skills fa-brands fa-github text-center"
              color="foreground"
            ></i>
          </CardBody>
          <CardFooter className="justify-around">
            <h1 className="text-center text-bold">GitHub</h1>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from "@nextui-org/react";
import homeTop from "../assets/homeTop.jpg";

export default function HomeTop() {
  return (
    <Card className="Home-top flex flex-col gap-4 m-2">
      <Image
        removeWrapper
        alt="Relaxing app background"
        className="z-0"
        width="100%"
        src={homeTop}
      />
    </Card>
  );
}

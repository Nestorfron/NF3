import React from "react";
import { Card, Input, Textarea, Button } from "@nextui-org/react";

export default function Contact() {
  return (
    <div id="contact">
      <h1 className="title p-5 text-center text-bold">Contacto</h1>
      <Card className="p-3 m-2 gap-2">
        <form className="m-2 p-3 gap-2 p-2 flex flex-col" action="https://formsubmit.co/nestorfrones07@gmail.com" method="POST">
          <div className="flex w-full flex-wrap md:flex-nowrap gap-4 mb-5">
            <Input type="hidden" name="_captcha" value="false"/>
            <Input name="name-last_name" type="name" label="Nombre y Apellido" />
            <Input name="email" type="email" label="Email" />
            <Input name="phone" type="phone" label="Teléfono" />
          </div>
          <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
            <Textarea name="message" label="Mensaje" className="w-full" />
          </div>
          <Button type="submit" variant="ghost" className="flex m-auto p-5 mt-5">
            Enviar
          </Button>
        </form>
      </Card>
    </div>
  );
}

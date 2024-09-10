import {
  Card,
  Input,
  Button,
  Typography,
  CardBody,
  Textarea,
} from "@material-tailwind/react";
import contactImg from "../assets/Acronis/contact.jpg";

export default function Contact() {
  return (
    <section id="contact" className=" lg:py-10 py-4 mx-auto lg:my-8">
      <Typography
        variant="h3"
        className="text-primeColor text-2xl lg:text-5xl font-extrabold leading-none py-4"
      >
        Get in Touch!
      </Typography>
      <Card className="flex flex-col lg:flex-row lg:w-full py-4 px-0">
        <CardBody className="w-full">
          <div className="relative w-full mx-auto rounded-xl lg:rounded-2xl h-40 lg:h-[70vh] overflow-hidden">
            <img
              src={contactImg}
              alt="Banner"
              className="w-full object-cover h-full"
            />
          </div>
        </CardBody>

        <CardBody className="w-full">
          <form className="lg:mt-8 lg:mb-2 w-full max-w-screen-lg sm:w-96">
            <div className="mb-1 flex flex-col gap-6">
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Your Name
              </Typography>
              <Input
                size="lg"
                placeholder="Exp. John Doe"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900 required:"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                required={true}
              />
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Your Email
              </Typography>
              <Input
                size="lg"
                placeholder="name@mail.com"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                required={true}
              />
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Your Message
              </Typography>
              <Textarea
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>

            <Button
              ripple={true}
              className="mt-6 py-4 rounded-2xl bg-primeColor w-full lg:w-40"
            >
              SEND
            </Button>
          </form>
        </CardBody>
      </Card>
    </section>
  );
}

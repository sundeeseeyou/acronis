import { Card, CardBody, Typography, Avatar } from "@material-tailwind/react";
import Image1 from "../assets/Acronis/all-in-one.jpg";
import Image2 from "../assets/Acronis/security.jpg";
import Image3 from "../assets/Acronis/acronis-ui.jpeg";
import Image4 from "../assets/Acronis/easy-access.jpg";

export default function Features() {
  return (
    <>
      <section className="py-4 mx-auto lg:my-8">
        <Typography
          variant="h2"
          className="text-primeColor text-2xl lg:text-5xl font-black leading-none py-4"
        >
          Why Acronis?
        </Typography>
        <Typography className="font-normal text-[0.8rem] lg:text-base lg:w-[60vw] text-textColor">
          We offer so many features, including advanced data protection, cloud
          storage, cybersecurity features, and easy-to-use interfaces, ensuring
          businesses can safeguard their digital assets effectively.
        </Typography>

        {/* Grid Items */}

        <div className="grid grid-cols-6 my-8 gap-4 overflow-hidden">
          <Card className="w-full flex justify-center items-center col-span-4 row-span-1 h-64 lg:h-96 rounded-2xl ">
            <img
              src={Image1}
              alt="Banner"
              className="w-full object-cover object-center h-full rounded-2xl blur-[2px] "
            />
            <CardBody className="absolute w-full inset-0 flex flex-col justify-end items-center text-left lg:px-10 lg:py-10  bg-black bg-opacity-80 rounded-xl">
              <div className="lg:px-4 lg:py-1 bg-subColor  self-start ">
                <Typography
                  variant="h3"
                  className="w-full text-textColor lg:text-4xl text-base self-center"
                >
                  All in One Software
                </Typography>
              </div>
              <Typography
                variant="paragraph"
                className="text-white text-lg w-full"
              >
                You only need one software to do multiple jobs and different
                tasks
              </Typography>
            </CardBody>
          </Card>
          <Card className="w-full text-black text-4xl flex justify-center items-center rounded-xl col-span-2 row-span-1 h-auto lg:h-96">
            <img
              src={Image2}
              alt="Banner"
              className="w-full object-cover object-bottom h-full rounded-2xl"
            />
            <CardBody className="absolute w-full inset-0 flex flex-col justify-start text-left lg:px-10 lg:py-10  bg-black bg-opacity-80 rounded-xl">
              <div className="lg:px-4 lg:py-1 bg-subColor self-start ">
                <Typography
                  variant="h3"
                  className="w-full text-textColor lg:text-xl text-base self-start"
                >
                  Top Notch Security
                </Typography>
              </div>
              <Typography
                variant="paragraph"
                className="text-white lg:text-md mt-2 text-left w-full"
              >
                High-end Security features keep your data and server safe and
                sound
              </Typography>
            </CardBody>
          </Card>

          <Card className="bg-blue-900 text-white flex justify-center items-center rounded-xl col-span-2 row-span-1 h-64 lg:h-96">
            <img
              src={Image4}
              alt="Banner"
              className="w-full object-cover object-right h-full rounded-2xl"
            />
            <CardBody className="absolute w-full inset-0 flex flex-col justify-start items-center text-left px-10 py-10  bg-black bg-opacity-80 rounded-xl">
              <div className="lg:px-4 lg:py-1 bg-subColor self-start ">
                <Typography
                  variant="h3"
                  className="w-full text-textColor lg:text-xl text-base"
                >
                  Easy Access
                </Typography>
              </div>
              <Typography
                variant="paragraph"
                className="text-white lg:text-md mt-2 text-left w-full"
              >
                One dashboard to manage all security aspects and protect your
                data
              </Typography>
            </CardBody>
          </Card>

          <Card className="w-full bg-yellow-500 text-white flex justify-center items-center rounded-xl col-span-4 row-span-1 h-64 lg:h-96">
            <img
              src={Image3}
              alt="Banner"
              className="w-full object-cover object-center h-full rounded-2xl"
            />
            <CardBody className="absolute w-full inset-0 flex flex-col justify-end items-center text-left px-10 py-10 bg-black bg-opacity-60 rounded-xl">
              <div className="lg:px-4 lg:py-1 bg-subColor  self-start ">
                <Typography
                  variant="h3"
                  className="w-full text-textColor lg:text-4xl text-base self-center"
                >
                  Modern UI
                </Typography>
              </div>
              <Typography
                variant="paragraph"
                className="text-white text-lg w-full mt-2"
              >
                Designed by our professional team, Acornis UI will be so
                intuitive and smooth run on any devices you have.
              </Typography>
            </CardBody>
          </Card>
        </div>
      </section>
    </>
  );
}

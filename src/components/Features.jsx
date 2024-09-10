import { Card, CardBody, Typography, Avatar } from "@material-tailwind/react";
import Image1 from "../assets/Acronis/all-in-one.jpg";
import Image2 from "../assets/Acronis/security.jpg";
import Image3 from "../assets/Acronis/easy-access.jpg";
import Image4 from "../assets/Acronis/acronis-ui.jpeg";

export default function Features() {
  return (
    <>
      <section id="features" className="py-4 mx-auto lg:my-8">
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

        <div className="grid grid-cols-4 lg:grid-cols-6 my-8 gap-4 overflow-hidden">
          {/*Grid no 1*/}
          <Card className="w-full flex justify-center items-center col-span-4  h-[20vh] lg:h-96 rounded-2xl ">
            <img
              src={Image1}
              alt="grid-1"
              className="w-full object-cover object-center h-full rounded-2xl blur-[2px] "
            />
            <CardBody className="absolute w-full inset-0 flex flex-col justify-end items-center text-left p-4 lg:px-10 lg:py-10  bg-black bg-opacity-50 rounded-xl">
              <Typography
                variant="h3"
                className="w-full text-white lg:text-4xl text-sm self-center font-extrabold"
              >
                All in One Software
              </Typography>

              <Typography
                variant="paragraph"
                className="text-white text-[0.8rem] mt-1 leading-4 lg:leading-snug lg:text-lg w-full"
              >
                You only need one software to do multiple jobs and different
                tasks
              </Typography>
            </CardBody>
          </Card>
          {/*Grid no 2*/}
          <Card className="w-full text-black text-4xl flex justify-center items-center rounded-xl col-span-2 h-[20vh] lg:h-96">
            <img
              src={Image2}
              alt="grid-2"
              className="w-full object-cover object-bottom h-full rounded-2xl"
            />
            <CardBody className="absolute w-full inset-0 flex flex-col justify-start text-left h-[20vh] lg:h-auto p-4 lg:px-10 lg:py-10 bg-black bg-opacity-30 rounded-xl">
              <Typography
                variant="h3"
                className="w-full text-white lg:text-xl text-sm self-start font-extrabold"
              >
                Top Notch Security
              </Typography>

              <Typography
                variant="paragraph"
                className="text-white text-[0.8rem] mt-1 leading-4 lg:leading-snug lg:text-lg w-full"
              >
                High-end Security features keep your data and server safe and
                sound
              </Typography>
            </CardBody>
          </Card>
          {/*Grid no 3*/}
          <Card className="w-full flex justify-center items-center rounded-xl col-span-2 h-[20vh] lg:h-96">
            <img
              src={Image3}
              alt="grid-3"
              className="w-full object-cover object-right h-full rounded-2xl"
            />
            <CardBody className="absolute w-full inset-0 flex flex-col justify-start items-center text-left p-4 lg:px-10 lg:py-10  bg-black bg-opacity-50 rounded-xl">
              <Typography
                variant="h3"
                className="w-full text-white lg:text-xl text-sm font-extrabold"
              >
                Easy Access
              </Typography>

              <Typography
                variant="paragraph"
                className="text-white text-[0.8rem] mt-1 leading-4 lg:leading-snug lg:text-lg w-full"
              >
                One dashboard to manage all security aspects and protect your
                data
              </Typography>
            </CardBody>
          </Card>
          {/*Grid no 4*/}
          <Card className="w-full flex justify-center items-center rounded-xl col-span-4 h-[20vh] lg:h-96">
            <img
              src={Image4}
              alt="grid-4"
              className="w-full object-cover object-center h-full rounded-2xl"
            />
            <CardBody className="absolute w-full inset-0 flex flex-col justify-end items-center text-left p-4 lg:px-10 lg:py-10 bg-black bg-opacity-60 rounded-xl">
              <Typography
                variant="h3"
                className="w-full text-white lg:text-4xl text-sm self-center font-extrabold"
              >
                Modern Design and UI
              </Typography>

              <Typography
                variant="paragraph"
                className="text-white text-[0.8rem] mt-1 leading-4 lg:leading-snug lg:text-lg w-full"
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

import { Card, CardBody, Typography, Avatar } from "@material-tailwind/react";
import BannerImg from "../assets/Acronis/Banner.jpg";

export default function Features() {
  return (
    <>
      <section className="py-10 mx-auto my-8">
        <Typography
          variant="h2"
          className="text-primeColor text-4xl lg:text-4xl font-black leading-none py-4"
        >
          Why Acronis?
        </Typography>
        <Typography className="font-normal !text-textColor mt-4">
          This is the paragraph where you can write more details about your
          product. Keep your user engaged by providing {<br />}meaningful
          information. Add a button if you want the user to see more. We are
          here to make life better.
        </Typography>

        {/* Grid Items */}

        <div className="grid grid-cols-4 my-8 gap-4 overflow-hidden">
          <Card className="w-full flex justify-center items-center col-span-3 row-span-1 h-64 lg:h-96 rounded-2xl">
            <img
              src={BannerImg}
              alt="Banner"
              className="w-full object-cover object-center h-full rounded-2xl"
            />
            <CardBody className="absolute w-full inset-0 flex flex-col justify-end items-center text-left px-10 py-10">
              <Typography
                variant="h3"
                className="w-full text-white lg:text-4xl text-base self-center"
              >
                All in One Software
              </Typography>
              <Typography
                variant="paragraph"
                className="text-white text-lg w-full"
              >
                You only need one software to do multiple jobs and different
                tasks
              </Typography>
            </CardBody>
          </Card>
          <Card className="text-black text-4xl flex justify-center items-center p-6 rounded-xl col-span-1 row-span-1 h-64 lg:h-96">
            Caption 2
          </Card>

          <div className="bg-blue-900 text-white flex justify-center items-center p-6 rounded-xl col-span-1 row-span-1 h-64 lg:h-96">
            Caption 3
          </div>
          <div className="bg-yellow-500 text-white flex justify-center items-center p-6 rounded-xl col-span-3 row-span-1 h-64 lg:h-96">
            Caption 4
          </div>
        </div>
      </section>
    </>
  );
}

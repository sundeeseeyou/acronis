import { Typography } from "@material-tailwind/react";

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

        <div className="grid grid-cols-4 my-8 gap-4">
          <div className="bg-blue-900 text-white flex justify-center items-center p-6 rounded-xl col-span-3 row-span-1 h-64 lg:h-96">
            Caption 1
          </div>
          <div className="bg-yellow-500 text-white flex justify-center items-center p-6 rounded-xl col-span-1 row-span-1 h-64 lg:h-96">
            Caption 2
          </div>

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

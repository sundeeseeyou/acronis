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

        <div className="container mx-auto py-12">
          <div className="grid gap-6 grid-cols-4 grid-rows-4 lg:grid-cols-6">
            {/* Row 1 */}
            <div className="bg-primeColor p-4 h-full rounded-xl flex justify-center items-center col-start-1 col-end-2 lg:col-span-2">
              <Typography className="text-white text-lg font-bold">
                Caption 1
              </Typography>
            </div>
            <div className="bg-yellow-400 p-4 h-48 rounded-xl flex justify-center items-center lg:col-span-1">
              <Typography className="text-gray-800 text-lg font-bold">
                Caption 2
              </Typography>
            </div>
            {/* Row 2 */}
            <div className="bg-primeColor p-4 h-48 lg:h-96 rounded-xl flex justify-center items-center lg:row-span-6">
              <Typography className="text-white text-lg font-bold">
                Caption 3
              </Typography>
            </div>
            <div className="bg-yellow-400 p-4 h-48 lg:h-64 rounded-xl flex justify-center items-center lg:col-span-2">
              <Typography className="text-gray-800 text-lg font-bold">
                Caption 4
              </Typography>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

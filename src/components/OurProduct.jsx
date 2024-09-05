import { Typography } from "@material-tailwind/react";
import {
  ShieldCheckIcon,
  CloudIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/24/solid";

export function OurProduct() {
  return (
    <section className="px-8 py-10 mx-auto my-8">
      <div className="w-full flex flex-col lg:flex-row gap-16 items-center justify-between">
        {/* Text Section */}
        <div id="product" className="lg:w-1/2 w-full">
          <Typography
            variant="small"
            className="text-primeColor font-semibold text-xl"
          >
            Our Product
          </Typography>
          <Typography
            variant="h2"
            className="text-primeColor text-4xl lg:text-6xl font-black leading-none py-4"
          >
            Acronis Cyber Protect Cloud
          </Typography>
          <Typography className="font-normal !text-textColor mt-4">
            This is the paragraph where you can write more details about your
            product. Keep your user engaged by providing meaningful information.
            Add a button if you want the user to see more. We are here to make
            life better.
          </Typography>
        </div>

        {/* Box Section (Icons + Text) */}
        <div className="lg:w-1/2 w-full grid grid-cols-2 gap-8">
          {/* Column 1 */}
          <div className="flex flex-col gap-8">
            <div className="flex items-center justify-center flex-col bg-white p-[3vw] rounded-2xl shadow-lg h-[25vw] border-4 border-[#2e2e2e] ">
              <ShieldCheckIcon className="h-12 w-12 text-blue-500" />
              <Typography className="mt-4 text-lg font-semibold">
                Security
              </Typography>
              <Typography className="text-gray-600 text-center">
                Protect your data with the best-in-class security features.
              </Typography>
            </div>
            <div className="flex items-center justify-center flex-col bg-white p-[3vw] rounded-2xl shadow-lg h-[25vw] border-4 border-[#2e2e2e]">
              <LockClosedIcon className="h-12 w-12 text-blue-500" />
              <Typography className="mt-4 text-lg font-semibold">
                Data Encryption
              </Typography>
              <Typography className="text-gray-600 text-center">
                Secure all your data through advanced encryption protocols.
              </Typography>
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-8">
            <div className="flex items-center justify-center flex-col bg-white p-[3vw] rounded-2xl shadow-lg h-[25vw] mt-16 lg:mt-8 border-4 border-[#2e2e2e]">
              <CloudIcon className="h-12 w-12 text-blue-500" />
              <Typography className="mt-4 text-lg font-semibold">
                Cloud Backup
              </Typography>
              <Typography className="text-gray-600 text-center">
                Easily backup your data to the cloud and ensure availability.
              </Typography>
            </div>
            <div className="flex items-center justify-center flex-col bg-white p-[3vw] rounded-2xl shadow-lg h-[25vw] lg:mt-8 border-4 border-[#2e2e2e]">
              <ServerIcon className="h-12 w-12 text-blue-500" />
              <Typography className="mt-4 text-lg font-semibold">
                Server Protection
              </Typography>
              <Typography className="text-gray-600 text-center">
                Ensure the safety of your servers with powerful protection
                tools.
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurProduct;

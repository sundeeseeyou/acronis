import { Typography } from "@material-tailwind/react";
import {
  ShieldCheckIcon,
  CloudIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/24/solid";

function BoxItems({ IconComponent, titleBox, description, extraMargin }) {
  return (
    <div
      className={`flex items-start justify-center flex-col bg-white p-[3vw] rounded-2xl border-primeColor hover:transition-shadow border-4 h-[25vw] ${extraMargin}`}
    >
      <IconComponent className="h-12 w-12 text-primeColor" />
      <Typography className="mt-4 text-lg font-semibold">{titleBox}</Typography>
      <Typography className="text-gray-600 text-left mt-4">
        {description}
      </Typography>
    </div>
  );
}

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
          <div className="flex flex-col gap-8">
            <BoxItems
              IconComponent={CloudIcon}
              titleBox="Backup & Restore Automation"
              description="Ini adalah"
            />
            <BoxItems
              IconComponent={ShieldCheckIcon}
              titleBox="Hello"
              description="Ini adalah"
            />
          </div>
          <div className="flex flex-col gap-8">
            <BoxItems
              IconComponent={LockClosedIcon}
              titleBox="Hello"
              description="Ini adalah"
              extraMargin="mt-16 lg:mt-8"
            />
            <BoxItems
              IconComponent={ServerIcon}
              titleBox="Hello"
              description="Ini adalah"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurProduct;

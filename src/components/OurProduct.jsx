import { Typography } from "@material-tailwind/react";
import { RiEarthquakeFill, RiShieldCheckFill } from "react-icons/ri";
import { MdDevices } from "react-icons/md";
import { LuDatabaseBackup } from "react-icons/lu";

function BoxItems({ IconComponent, titleBox, description, extraMargin }) {
  return (
    <div
      className={`flex items-start justify-center flex-col bg-white px-8 py-4 rounded-2xl border-primeColor hover:transition-shadow border-4 h-[25vw] ${extraMargin}`}
    >
      <IconComponent className="h-12 w-12 text-primeColor" />
      <Typography className="mt-4 text-lg font-semibold">{titleBox}</Typography>
      <Typography className="text-[#2e2e2e] text-sm text-left mt-4">
        {description}
      </Typography>
    </div>
  );
}

export function OurProduct() {
  return (
    <section className="py-10 mx-auto my-8">
      <div className="w-full flex flex-col lg:flex-row gap-16 items-center justify-between">
        {/* Text Section */}
        <div id="product" className="lg:w-1/2 w-1/2">
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
          <Typography className="font-normal !text-textColor">
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
              IconComponent={LuDatabaseBackup}
              titleBox="Backup & Restore Automation"
              description="Ensures seamless data protection by automating backup processes, reducing downtime, and enhancing system reliability."
            />
            <BoxItems
              IconComponent={MdDevices}
              titleBox="Endpoint Management"
              description="Simplifies the control of all connected devices with centralized monitoring, updates, and security management."
            />
          </div>
          <div className="flex flex-col gap-8">
            <BoxItems
              IconComponent={RiShieldCheckFill}
              titleBox="Cyber Security"
              description="Provides advanced protection against cyber threats with real-time monitoring, AI-based threat detection, and automated defense responses."
              extraMargin="mt-16 lg:mt-8"
            />
            <BoxItems
              IconComponent={RiEarthquakeFill}
              titleBox="Disaster Recovery"
              description="Helps maintain business continuity by enabling fast and reliable recovery of data and systems after a disaster."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurProduct;

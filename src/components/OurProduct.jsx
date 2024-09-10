import { Typography, Card } from "@material-tailwind/react";
import { RiEarthquakeFill, RiShieldCheckFill } from "react-icons/ri";
import { MdDevices } from "react-icons/md";
import { LuDatabaseBackup } from "react-icons/lu";

function BoxItems({ IconComponent, titleBox, description, extraMargin }) {
  return (
    <Card
      className={`flex items-start justify-start flex-col bg-white p-4 lg:p-8 lg:rounded-2xl h-[60vw] rounded-xl hover:transition-shadow lg:h-[23vw] ${extraMargin}`}
    >
      <IconComponent className="w-[30px] h-auto lg:h-12 lg:w-auto text-primeColor" />
      <Typography className=" text-primeColor mt-2 text-md leading-[1rem] lg:mt-4 lg:text-lg font-semibold ">
        {titleBox}
      </Typography>
      <Typography className=" text-[#2e2e2e] text-[0.7rem] lg:text-sm text-left mt-2 lg:mt-4 w-full break-words">
        {description}
      </Typography>
    </Card>
  );
}

export function OurProduct() {
  return (
    <section id="product" className="lg:py-10 py-4 mx-auto lg:my-8">
      <div className="w-full flex flex-col gap-4 lg:flex-row lg:gap-16 items-center justify-between">
        {/* Text Section */}
        <div className=" lg:w-1/2 w-full">
          <Typography
            variant="small"
            className="text-primeColor font-semibold lg:text-xl text-sm"
          >
            Our Product
          </Typography>
          <Typography
            variant="h3"
            className="text-primeColor text-2xl lg:text-5xl font-black leading-none py-4"
          >
            Acronis Cyber Protect Cloud
          </Typography>
          <Typography className="font-normal text-[0.8rem] lg:text-base text-textColor">
            Acronis Cyber Protect Cloud is a modern backup and management
            platform that meets all your server and data security needs. As an
            all-in-one solution, Acronis reduces costs and complexity by
            eliminating the need for multiple security tools. It provides data
            protection, cybersecurity, and endpoint management in a single
            platform.
          </Typography>
        </div>

        {/* Box Section (Icons + Text) */}
        <div className="lg:w-1/2 w-full grid grid-cols-2 lg:gap-4 gap-4">
          <div className="flex flex-col gap-4">
            <BoxItems
              IconComponent={LuDatabaseBackup}
              titleBox="Backup & Restore"
              description="Ensures seamless data protection by automating backup processes, reducing downtime, and enhancing system reliability."
            />
            <BoxItems
              IconComponent={MdDevices}
              titleBox="Endpoint Management"
              description="Simplifies the control of all connected devices with centralized monitoring, updates, and security management."
            />
          </div>
          <div className="flex flex-col gap-4">
            <BoxItems
              IconComponent={RiShieldCheckFill}
              titleBox="Cyber Security"
              description="Provides advanced protection against cyber threats with real-time monitoring, AI-based threat detection, and automated defense responses."
              extraMargin="m-0 lg:mt-8"
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

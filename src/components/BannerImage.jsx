import BannerImg from "../assets/Acronis/geometric.jpg";
import { Typography, Button } from "@material-tailwind/react";

function BannerImage() {
  return (
    <>
      <header className="relative w-full mx-auto rounded-xl lg:rounded-3xl lg:h-[70vh] h-[25vh] overflow-hidden">
        {/* Background Image */}
        <img
          src={BannerImg}
          alt="Banner"
          className="w-full object-cover h-full blur-[1px] lg:blur-sm"
        />

        {/* Text Overlay */}
        <div className="absolute px-4 lg:px-8 inset-0 flex flex-col justify-center gap-2 items-center bg-black bg-opacity-40 text-white text-center w-full">
          <Typography
            variant="h2"
            color="white"
            className="lg:leading-snug text-4rem
             lg:w-3xl lg:text-[4rem] font-extrabold "
          >
            #YOUCAN<span className="text-[#FFD600] leading-snug">REST</span>
          </Typography>
          {/* Adjust space here with a div instead of br */}
          <div className=" lg:my-[-20px]"></div>{" "}
          {/* Use my-2 for smaller space, adjust as needed */}
          <Typography
            variant="h2"
            color="white"
            className="lg:leading-snug text-xl lg:w-3xl lg:text-[4rem] font-extrabold "
          >
            WE'LL DO OUR{" "}
            <span className="text-[#FFD600] leading-snug">BEST</span>
          </Typography>
          <Typography
            variant="lead"
            className="w-full text-white text-[0.7rem] lg:text-xl self-center lg:px-8"
          >
            Acronis Cyber Protect Cloud protects your system and data with
            automation backup and restore, anti malwares and virus, and rapid
            disaster recovery
          </Typography>
          {/* <div className="flex items-center gap-8 my-4"> */}
          {/* <Button className="bg-[#FFD600] rounded-lg px-4 py-2 lg:rounded-3xl text-[#2e2e2e] lg:px-8 hover:bg-[#dab71c] hover:shadow-lg">
            GET STARTED
          </Button> */}
          {/* </div> */}
        </div>
      </header>
    </>
  );
}

export default BannerImage;

import BannerImg from "../assets/Acronis/Banner.jpg";
import { Typography, Button } from "@material-tailwind/react";

function Banner() {
  return (
    <>
      <div className="relative max-w-full mx-auto rounded-3xl h-[85vh] overflow-hidden">
        {/* Background Image */}
        <img
          src={BannerImg}
          alt="Banner"
          className="w-full object-cover h-full blur-sm"
        />

        {/* Text Overlay */}
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-40 text-white p-4 text-center">
          <Typography
            variant="h2"
            color="white"
            className="my-6 leading-snug !text-2xl lg:max-w-3xl lg:!text-5xl"
          >
            Get ready to experience a new level of{" "}
            <span className="text-[#FFD600] leading-snug">performance</span> and{" "}
            <span className="leading-snug text-[#FFD600]">functionality</span>.
          </Typography>
          <Typography
            variant="lead"
            className="w-full text-white lg:text-lg text-base self-center mb-10"
          >
            The time is now for it to be okay to be great. For being a bright
            color. For standing out.
          </Typography>
          {/* <div className="flex items-center gap-8 my-4"> */}
          <Button className="bg-[#FFD600] rounded-2xl text-[#2e2e2e] px-8 text-base hover:bg-[#dab71c] hover:shadow-lg">
            GET STARTED
          </Button>
          {/* </div> */}
        </div>
      </div>
    </>
  );
}

export default Banner;

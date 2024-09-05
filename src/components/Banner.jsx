import BannerImg from "../assets/Acronis/Banner.jpg";
import { Button } from "@material-tailwind/react";
function Banner() {
  return (
    <>
      <div className="relative max-w-full mx-auto rounded-[50px] h-[90vh] overflow-hidden">
        {/* Background Image */}
        <img src={BannerImg} alt="Banner" className="w-full object-cover" />

        {/* Text Overlay */}
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-40 text-white p-4 text-center">
          <Button className="bg-[#FFD600] rounded-2xl text-[#2e2e2e] px-8 py-3 text-base">
            GET STARTED
          </Button>
        </div>
      </div>
    </>
  );
}

export default Banner;

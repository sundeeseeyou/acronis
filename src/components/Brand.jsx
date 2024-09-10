import GoogleIcon from "../assets/Acronis/Brand/google.png";
import CpanelIcon from "../assets/Acronis/Brand/cpanel.png";
import PleskIcon from "../assets/Acronis/Brand/plesk.png";
import Wmhcs from "../assets/Acronis/Brand/wmhcs.png";
import Webex from "../assets/Acronis/Brand/webex.png";
import { Typography } from "@material-tailwind/react";

function ImageBrand({ imgLink, customClass }) {
  return (
    <div className={`flex justify-center items-center p-2 ${customClass}`}>
      <img src={imgLink} className="w-24 h-auto sm:w-28 md:w-32 lg:w-40" />
    </div>
  );
}

export default function Brand() {
  return (
    <section className="flex flex-col justify-center items-center py-2 lg:py-0">
      <Typography
        variant="paragraph"
        className="text-gray-500 font-thin text-sm"
      >
        Featured with
      </Typography>
      <div className="flex flex-wrap justify-center lg:justify-between items-center gap-2 lg:gap-4 w-full py-4">
        <ImageBrand imgLink={GoogleIcon} />
        <ImageBrand imgLink={CpanelIcon} />
        <ImageBrand imgLink={PleskIcon} />
        <ImageBrand
          imgLink={Wmhcs}
          customClass="grayscale opacity-30 brightness-20"
        />
        <ImageBrand
          imgLink={Webex}
          customClass="grayscale opacity-30 brightness-20"
        />
      </div>
    </section>
  );
}

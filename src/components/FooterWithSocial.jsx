import { Typography } from "@material-tailwind/react";
import logoAcronis from "../assets/Acronis/Acronis.svg.png";
import {
  FaSquareFacebook,
  FaSquareXTwitter,
  FaSquareYoutube,
} from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";

function SocialIcons({ iconImg: IconImg, link }) {
  return (
    <>
      <Typography
        as="a"
        href={link}
        target="_blank"
        className="text-primeColor opacity-80 transition-opacity hover:opacity-100"
      >
        <IconImg className="lg:h-8 lg:w-8 h-8 w-8" />
      </Typography>
    </>
  );
}

export default function FooterWithSocial() {
  return (
    <footer className="flex flex-col w-full border-t py-6 lg:py-8 text-center lg:text-left">
      {/* Top Section: Logo on the left, menus on the right */}
      <div className="w-full flex h-auto lg:h-[50vh] flex-col lg:flex-row justify-start gap-4 lg:justify-between items-start lg:items-start overflow-hidden">
        {/* Logo on the left */}
        <div className="w-full lg:w-auto flex justify-start lg:justify-start mb-0">
          <img src={logoAcronis} alt="logo acronis footer" className="w-32" />
        </div>

        {/* Menus on the right */}
        <div className="w-full lg:w-auto flex flex-col lg:flex-row justify-start lg:justify-end gap-8 lg:gap-24">
          {/* Website Links */}
          <div id="footer-menu">
            <ul className="text-primeColor text-left lg:w-[10vw] font-semibold">
              <li>
                <Typography
                  variant="h4"
                  size="sm"
                  className="mb-2 text-primeColor"
                >
                  Website
                </Typography>
              </li>
              <li>
                <Typography
                  as="a"
                  href="index.html"
                  className="font-semibold text-primeColor hover:text-[#262477] focus:text-primeColor lg:mb-2"
                >
                  Home
                </Typography>
              </li>
              <li>
                <Typography
                  as="a"
                  href="#product"
                  className="font-semibold text-primeColor hover:text-[#262477] focus:text-primeColor lg:mb-2"
                >
                  Product
                </Typography>
              </li>
              <li>
                <Typography
                  as="a"
                  href="#features"
                  className="font-semibold text-primeColor hover:text-[#262477] focus:text-primeColor lg:mb-2"
                >
                  Features
                </Typography>
              </li>
              <li>
                <Typography
                  as="a"
                  href="#contact"
                  className="font-semibold text-primeColor hover:text-[#262477] focus:text-primeColor"
                >
                  Contact
                </Typography>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div id="Social Menu" className="text-left">
            <Typography
              variant="h4"
              size="sm"
              className="mb-2 sm:text-left text-primeColor"
            >
              Social Media
            </Typography>
            <div className="flex gap-4 text-blue-gray-900 sm:justify-center">
              <SocialIcons
                iconImg={FaSquareFacebook}
                link="https://facebook.com"
              />
              <SocialIcons iconImg={BsInstagram} link="https://instagram.com" />
              <SocialIcons iconImg={FaSquareXTwitter} link="https://x.com" />
              <SocialIcons iconImg={FaSquareYoutube} link="https:youtube.com" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section: Copyright and Sitemap */}
      <div className="w-full flex  flex-col-reverse items-center lg:flex-row justify-between mt-6 lg:mt-0">
        <Typography className="text-[0.8rem] lg:text-base lg:font-normal">
          &copy; 2024 Acronis | All Right Reserved
        </Typography>

        <ul className="flex flex-row lg:flex-wrap justify-start lg:justify-center lg:items-center mb-4 gap-4 lg:gap-y-2 lg:gap-x-8 lg:mt-0 lg:mb-0">
          <li>
            <Typography
              as="a"
              href="/privacy-policy"
              className="lg:font-normal font-sm text-gray-700 transition-colors hover:text-primeColor focus:text-primeColor"
            >
              Privacy Policy
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="sitemap_xml"
              className="lg:font-normal font-sm text-gray-700 transition-colors hover:text-primeColor focus:text-primeColor"
            >
              Sitemap
            </Typography>
          </li>
        </ul>
      </div>
    </footer>
  );
}

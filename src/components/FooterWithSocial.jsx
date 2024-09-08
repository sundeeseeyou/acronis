import { Typography } from "@material-tailwind/react";
import {
  FaSquareXTwitter,
  FaSquareFacebook,
  FaInstagram,
} from "react-icons/fa6";

const LINKS = [
  {
    title: "Product",
    items: ["Overview", "Features", "Solutions", "Tutorials"],
  },
  {
    title: "Company",
    items: ["About us", "Careers", "Press", "News"],
  },
];

const currentYear = new Date().getFullYear();

export default function FooterWithSocial() {
  return (
    <footer className="relative w-full mt-10 ">
      <div className="mx-auto w-full max-w-7xl px-8">
        {/* {LINKS.map(({ title, items }) => (
              <ul key={title}>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="mb-3 font-medium opacity-40"
                >
                  {title}
                </Typography>
                {items.map((link) => (
                  <li key={link}>
                    <Typography
                      as="a"
                      href="#"
                      color="gray"
                      className="py-1.5 font-normal transition-colors hover:text-blue-gray-900"
                    >
                      {link}
                    </Typography>
                  </li>
                ))}
              </ul>
            ))} */}

        <div className="mt-12 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
          <Typography
            variant="small"
            className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0"
          >
            &copy; {currentYear} <a href="index.html">| Acronis</a>. All Rights
            Reserved.
          </Typography>
          <div className="flex gap-4 text-blue-gray-900 sm:justify-center">
            <Typography
              as="a"
              href="https://instagram.com"
              className="opacity-80 transition-opacity hover:opacity-100"
            >
              {""}
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  );
}

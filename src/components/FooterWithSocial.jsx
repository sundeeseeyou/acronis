import { Typography } from "@material-tailwind/react";

export default function FooterWithSocial() {
  return (
    <footer className="flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 text-center md:justify-between">
      <Typography className="font-normal">
        &copy; 2024 Acronis | All Right Reserved
      </Typography>
      <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
        <li>
          <Typography
            as="a"
            href="#"
            className="font-normal transition-colors hover:text-primeColor focus:text-primeColor"
          >
            Home
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            className="font-normal transition-colors hover:text-primeColor focus:text-primeColor"
          >
            Product
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            className="font-normal transition-colors hover:text-primeColor focus:text-primeColor"
          >
            Features
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            className="font-normal transition-colors hover:text-primeColor focus:text-primeColor"
          >
            Contact
          </Typography>
        </li>
      </ul>
    </footer>
  );
}

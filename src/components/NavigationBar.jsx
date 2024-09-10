import React from "react";
import {
  Navbar,
  Collapse,
  Button,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import AcronisImage from "../assets/Acronis/Acronis.svg.png";

function NavItem({ children, url }) {
  return (
    <li>
      <Typography
        as="a"
        href={url}
        variant="paragraph"
        className="text-[#2e2e2e] flex items-center gap-2 font-semibold hover:underline active:text-[#ff5656] transition-colors"
      >
        {children}
      </Typography>
    </li>
  );
}

function NavigationBar() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  return (
    <Navbar shadow={false} fullWidth className="border-0 py-2 px-0 bg-inherit">
      <div className="flex items-center justify-between py-2 w-full">
        <img
          src={AcronisImage}
          className="h-auto w-24 lg:w-32"
          aria-label="logo"
          alt="logo-acronis"
        />
        <ul className="hidden items-center gap-8 lg:flex">
          <NavItem url="index.html">Home</NavItem>
          <NavItem url="#product">Product</NavItem>
          <NavItem url="#features">Features</NavItem>
          <NavItem url="#contact">Contact</NavItem>
        </ul>
        <div className="flex items-center gap-2">
          <Button className="bg-[#FFD600] px-4 py-2 rounded-lg lg:rounded-2xl lg:px-8 lg:py-4 text-[#2e2e2e] text-sm lg:text-base lg:flex">
            <Typography
              className="lg:font-bold font-bold text-sm"
              as={"a"}
              href="https://devstaging.mybaticloud.com/index.php?rp=/store/acronis-cyber-protect-cloud"
            >
              GET STARTED
            </Typography>
          </Button>
          <IconButton
            variant="text"
            color="gray"
            onClick={handleOpen}
            className="inline-block lg:hidden"
          >
            {open ? (
              <XMarkIcon strokeWidth={2} className="h-6 w-6" />
            ) : (
              <Bars3Icon strokeWidth={2} className="h-6 w-6" />
            )}
          </IconButton>
        </div>
      </div>
      <Collapse open={open}>
        <div className="container mx-auto my-4 border-t border-blue-gray-50 px-2 pt-4">
          <ul className="flex flex-col gap-4">
            <NavItem>Home</NavItem>
            <NavItem>Product</NavItem>
            <NavItem>About</NavItem>
            <NavItem>Contact</NavItem>
          </ul>
        </div>
      </Collapse>
    </Navbar>
  );
}

export default NavigationBar;

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

function NavItem({ children }) {
  return (
    <li>
      <Typography
        as="a"
        href="#"
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
          className="h-auto w-32"
          aria-label="logo"
          alt="logo-acronis"
        />
        <ul className="hidden items-center gap-8 lg:flex">
          <NavItem>Home</NavItem>
          <NavItem>Product</NavItem>
          <NavItem>About</NavItem>
          <NavItem>Contact</NavItem>
        </ul>
        <div className="flex items-center gap-4">
          <Button className="bg-[#FFD600] rounded-2xl text-[#2e2e2e] px-6 py-3 text-base hidden lg:flex">
            GET STARTED
          </Button>
        </div>
        <IconButton
          variant="text"
          color="gray"
          onClick={handleOpen}
          className="ml-auto inline-block lg:hidden"
        >
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>
      <Collapse open={open}>
        <div className="container mx-auto mt-3 border-t border-blue-gray-50 px-2 pt-4">
          <ul className="flex flex-col gap-4">
            <NavItem>Home</NavItem>
            <NavItem>Product</NavItem>
            <NavItem>About</NavItem>
            <NavItem>Contact</NavItem>
          </ul>
          <div className="mt-6 mb-4 flex items-center gap-4">
            <Button>GET STARTED</Button>
          </div>
        </div>
      </Collapse>
    </Navbar>
  );
}

export default NavigationBar;

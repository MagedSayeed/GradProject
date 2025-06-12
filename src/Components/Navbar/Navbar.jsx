import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import logo2 from "../../assets/logo2.png";
import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Download";

const navigation = [
  { name: "Games", to: "Games", current: false },
  { name: "How To Play", to: "HowToPlay", current: false },
  { name: "Support", to: "Support", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Disclosure
      as="nav"
      className="position-fixed z-0 top-0 end-0 start-0 myNavBar z-3"
    >
      <div className="container">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
              <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                <Bars3Icon
                  aria-hidden="true"
                  className="block size-6 group-data-open:hidden"
                />
                <XMarkIcon
                  aria-hidden="true"
                  className="hidden size-6 group-data-open:block"
                />
              </DisclosureButton>
            </div>
            <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
              <Link className="flex shrink-0 items-center" to="/">
                <img alt="GameZone" src={logo2} className="h-8" />
              </Link>
              <div className="hidden md:ml-6 md:block">
                <div className="flex">
                  {navigation.map((item) => (
                    <NavLink
                      key={item.name}
                      to={"/" + item.to}
                      aria-current={item.current ? "page" : undefined}
                      className={classNames(
                        item.current
                          ? " myColor"
                          : "navLinkItem navLinkFont text-gray-300 text-white ",
                        "rounded-md px-3 py-3 text-sm font-medium text-decoration-none  "
                      )}
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex gap-3 items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <NavLink
                to="/signup"
                className="text-white navLinkFont  text-decoration-none block py-2 text-sm  rounded"
              >
                SignUp
              </NavLink>

              <div className="hidden md:block">
                <Button variant="contained" endIcon={<SendIcon />}>
                  Download
                </Button>
              </div>
            </div>
          </div>
        </div>

        <DisclosurePanel className="md:hidden">
          <div className="space-y-1 px-2 pt-2 pb-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                as="a"
                to={"/" + item.to}
                aria-current={item.current ? "page" : undefined}
                className={classNames(
                  item.current
                    ? "bg-gray-900 "
                    : "text-gray-300 hover:bg-gray-700",
                  "cursor-pointer block rounded-md px-3 py-2 text-base font-medium text-decoration-none text-white "
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </DisclosurePanel>
      </div>
    </Disclosure>
  );
}

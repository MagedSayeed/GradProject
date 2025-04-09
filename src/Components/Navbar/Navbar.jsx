import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import Home from "../Home/Home";

const navigation = [
  { name: "Games", to: "Games", current: false },
  { name: "How To Play", to: "HowToPlay", current: false },
  { name: "Download", to: "Download", current: false },
  { name: "Support", to: "Support", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Disclosure
      as="nav"
      className="position-sticky z-0 top-0 end-0 start-0 myNavBar z-3"
    >
      <div className="container">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
              {/* Mobile menu button*/}
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
                <img alt="GameZone" src={logo} className="h-12" />
              </Link>
              <div className="hidden md:ml-6 md:block">
                <div className="flex">
                  {navigation.map((item) => (
                    <NavLink
                      key={item.name}
                      to={'/'+item.to}
                      aria-current={item.current ? "page" : undefined}
                      className={classNames(
                        item.current
                          ? " myColor"
                          : "navLinkItem text-gray-300 text-white ",
                        "rounded-md px-3 py-3 text-sm font-medium text-decoration-none  "
                      )}
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <Menu as="div" className="relative ml-3">
                <div>
                  <MenuButton className="relative flex rounded-full  text-sm">
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">Open user menu</span>
                    <div className="lg:flex lg:flex-1 lg:justify-end ">
                      <a href="#" className=" text-sm/6 font-semibold text-white text-decoration-none">
                        Log in <span aria-hidden="true">&rarr;</span>
                      </a>
                    </div>
                  </MenuButton>
                </div>
                <MenuItems
                  transition
                  className=" text-white absolute  right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-dark py-1 ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                >
                  <MenuItem>
                    <NavLink
                      href="#"
                      className="text-white text-decoration-none block px-4 py-2 text-sm hover:bg-gray-700 rounded"
                    >
                      Your Profile
                    </NavLink>
                  </MenuItem>
                  <MenuItem>
                    <NavLink
                      href="#"
                      className="text-white  text-decoration-none block px-4 py-2 text-sm hover:bg-gray-700 rounded"
                    >
                      Sign out
                    </NavLink>
                  </MenuItem>
                </MenuItems>
              </Menu>
            </div>
          </div>
        </div>

        <DisclosurePanel className="md:hidden">
          <div className="space-y-1 px-2 pt-2 pb-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                as="a"
                to={'/'+item.to}
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

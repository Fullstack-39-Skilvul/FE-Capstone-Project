import React, { useState, useEffect } from "react";
import { Button, Navbar } from "flowbite-react";
import { IMAGES } from "../../assets/constant";
import { NavLink, useLocation } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/action/loginAction";

function NavbarComponent() {
  const dispatch = useDispatch();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const customTheme = {
    link: {
      base: "block py-2 pr-4 pl-3 md:p-0 md:mr-2 sm:mr-3",

      disabled: {
        on: "text-gray-400 hover:cursor-not-allowed dark:text-gray-600",
        off: "",
      },
    },
    toggle: {
      base: "inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden",
      icon: "h-6 w-6 shrink-0",
    },
  };

  useEffect(() => {
    const userToken = localStorage.getItem("token");
    const userIsLoggedIn = !!userToken;

    setIsLoggedIn(userIsLoggedIn);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("metode");
    setIsLoggedIn(false);
    dispatch(logout());
  };

  return (
    <Navbar
      fluid
      rounded
      theme={customTheme}
      className="border-b fixed w-full top-0 z-50"
    >
      <Navbar.Brand>
        <img src={IMAGES.logoManahsucita} alt="logo manahsucita" width={130} />
      </Navbar.Brand>
      <div className="flex gap-2 md:order-2">
        {!isLoggedIn ? (
          <>
            <Button
              type="button"
              className="text-blue-800 hover:text-white border-2 border-blue-700 bg-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              href="/login"
            >
              Login
            </Button>
            <Button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              href="/register"
            >
              Sign Up
            </Button>
          </>
        ) : (
          <NavLink to="/login">
            <Button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={handleLogout}
            >
              Logout
            </Button>
          </NavLink>
        )}
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <ScrollLink to="home" smooth={true} duration={500}>
          <Navbar.Link className="cursor-pointer">Home</Navbar.Link>
        </ScrollLink>
        <ScrollLink to="about" smooth={true} duration={500}>
          <Navbar.Link className="cursor-pointer">About</Navbar.Link>
        </ScrollLink>
        <ScrollLink to="pricing" smooth={true} duration={500}>
          <Navbar.Link className="cursor-pointer">Pricing</Navbar.Link>
        </ScrollLink>
        <Navbar.Link>
          <NavLink to="contact">Contact</NavLink>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarComponent;

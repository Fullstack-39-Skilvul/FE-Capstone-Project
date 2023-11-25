'use client';

import { Button, Navbar } from 'flowbite-react';
import { IMAGES } from '../../assets/constant';


function navbar() {
  const customTheme = {

    "link": {
      "base": "block py-2 pr-4 pl-3 md:p-0 md:mr-2 sm:mr-3",
      "active": {
        "on": "bg-[#0F2650] text-white dark:text-white md:bg-[#42A7FF] md:text-white md:p-2 md:rounded-xl",
        "off": "text-blue-400 dark:text-blue-400 md:mt-2 hover:text-blue-900 dark:hover:text-white  md:hover:text-blue-900 md:dark:hover:bg-blue-700 md:dark:hover:text-white"
        // "off": "border-b border-blue-100 md:mt-2 text-blue-700 hover:bg-blue-50 dark:border-blue-700 dark:text-blue-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-cyan-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
      },
      "disabled": {
        "on": "text-gray-400 hover:cursor-not-allowed dark:text-gray-600",
        "off": ""
      }
    },
    "toggle": {
      "base": "inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden",
      "icon": "h-6 w-6 shrink-0"
    }

  };

  return (
    <Navbar fluid rounded theme={customTheme} className='border-b fixed w-full top-0 '>
      <Navbar.Brand >
        <img
          src={IMAGES.logoManahsucita}
          alt="logo manahsucita"
          width={130}
        />
      </Navbar.Brand>
      <div className="flex md:order-2 ">
        <Button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Jadwalkan Konsultasi</Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="#" >About</Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default navbar;
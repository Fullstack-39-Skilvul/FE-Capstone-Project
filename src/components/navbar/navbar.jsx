
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
      <Navbar.Brand className='md:w-52' >
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



// import React, { useState } from 'react';
// import { Link, NavLink } from 'react-router-dom';


// const navbar = () => {
//   const [isMenuVisible, setIsMenuVisible] = useState(false);

//   const handleButtonClick = () => {
//     setIsMenuVisible(!isMenuVisible);
//   };

//   return (
//     <nav className=" border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
//       <div className="flex items-center mx-auto p-4">
//         <Link href="/">
//           <a className="flex items-center mx-4">
//             <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
//             <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
//           </a>
//         </Link>
//         <button
//           data-collapse-toggle="navbar-hamburger"
//           type="button"
//           onClick={handleButtonClick}
//           className="lg:hidden inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
//           aria-controls="navbar-hamburger"
//           aria-expanded={isMenuVisible}
//         >
//           <span className="sr-only">Open main menu</span>
//           <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
//             <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
//           </svg>
//         </button>
//         <div className={`lg:flex ${isMenuVisible ? 'block' : 'hidden'} grow`} id="navbar-hamburger">
//           <ul className="flex flex-col font-medium lg:flex-row lg:items-center rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
//             <li>
//               <Link href="/">
//                 <a className="block py-2 px-3 text-white bg-blue-700 rounded dark:bg-blue-600" aria-current="page">Home</a>
//               </Link>
//             </li>
//             <li>
//               <Link href="/services">
//                 <a className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Services</a>
//               </Link>
//             </li>
//             <li>
//               <Link href="/pricing">
//                 <a className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white">Pricing</a>
//               </Link>
//             </li>
//             <li>
//               <Link href="/contact">
//                 <a className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Contact</a>
//               </Link>
//             </li>
//           </ul>
//         </div>
//       <div>
//         <NavLink>
//           <button className="bg-sky-500 text-white px-3 py-2 rounded-xl text-sm">
//             Jadwalkan Konsultasi
//           </button>
//         </NavLink>
//       </div>
//       </div>
//     </nav>
//   );
// };







{/* <nav className="flex justify-between py-3 ps-4 pe-10 text-sky-500 shadow-sm items-center bg-white w-full">
  <div className="flex items-center gap-10">
    <div>
      <img
        src={IMAGES.logoManahsucita}
        alt="logo manahsucita"
        width={200}
      />
    </div>
    <div>
      <ul className="flex gap-10 font-semibold">
        <li>Home</li>
        <li>About</li>
        <li>Pilih Konseling</li>
        <li>Contact</li>
      </ul>
    </div>
  </div>
  <div>
    <NavLink>
      <button className="bg-sky-500 text-white px-3 py-2 rounded-xl text-sm">
        Jadwalkan Konsultasi
      </button>
    </NavLink>
  </div>
</nav>
  );
} */}

export default navbar;
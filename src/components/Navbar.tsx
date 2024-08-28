import Image from 'next/image';
import React from 'react';
import logo from '@/assets/images/logosaas.png';
import menu from '@/assets/icons/menu.svg';
import { RxHamburgerMenu } from 'react-icons/rx';
import Link from 'next/link';

const Navbar = () => {
  const navLinks = ['about', 'features', 'updates', 'help', 'customers'];

  return (
    <nav className="bg-black py-4 px-3 w-full">
      <div className="flex items-center justify-between">
        <div className="relative">
          <div className="absolute rainbow_gradient w-full top-2 bottom-0 blur-md"></div>
          <Image
            src={logo}
            width="100"
            height="100"
            alt="saas_logo"
            className="size-14 relative"
          />
        </div>
        <div className="border border-white size-10 inline-flex justify-center items-center rounded-md border-opacity-30 sm:hidden">
          <RxHamburgerMenu className="text-white" size={26} />{' '}
        </div>
        <div className="sm:flex items-center gap-6 hidden">
          <ul className="flex gap-4">
            {navLinks.map((link, i) => (
              <li className="" key={i}>
                <Link
                  href={link}
                  className="text-white capitalize text-md text-opacity-70 hover:text-opacity-100 transition"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
          <button className="bg-white text-black px-4 py-2 rounded-lg font-medium">
            Get for free
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

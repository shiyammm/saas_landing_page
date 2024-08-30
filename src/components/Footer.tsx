import React from 'react';
import { FaXTwitter } from 'react-icons/fa6';
import { RiInstagramFill } from 'react-icons/ri';
import { FaTiktok } from 'react-icons/fa';
import { IoLogoYoutube } from 'react-icons/io5';

const Footer = () => {
  const socialMediaIcons = [
    {
      icon: FaXTwitter,
      name: 'twitter',
    },
    {
      icon: RiInstagramFill,
      name: 'instagram',
    },
    {
      icon: FaTiktok,
      name: 'tiktok',
    },
    {
      icon: IoLogoYoutube,
      name: 'youtube',
    },
  ];
  return (
    <footer className="bg-black text-white border-t py-4 border-white border-opacity-30 xl:px-20">
      <div className="flex sm:flex-row justify-between px-4 flex-col gap-6 items-center ">
        <div>
          <p className="text-white/60 text-center font-normal">
            <span>©</span>
            2024 Your Company, Inc. All rights reserved
          </p>
        </div>
        <div>
          <ul className="flex gap-3 mx-auto">
            {socialMediaIcons.map(({ icon: Icon, name }) => (
              <li key={name}>
                <Icon size={20} className="text-white/60" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

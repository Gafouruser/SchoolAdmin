import React from "react";
import Image from "next/image";
import { FaAngleDown } from "react-icons/fa";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";
import { IoMdSearch } from "react-icons/io";

const AdminHeader = ({ toggleNav }: { toggleNav: () => void }) => {
  return (
    <div className="flex items-center bg-white drop-shadow-md">
      <div>
        <div className="flex gap-16 justify-center items-center">
          <div className="flex justify-center items-center px-12 bg-[#073861]">
            <Image
              src="/images/icone_logo.png"
              alt="School Admin logo"
              width={50}
              height={50}
            />
            <p className="font-bold text-white">School Admin</p>
          </div>
          <div className="flex gap-10 justify-center items-center">
            <IoMdMenu className="w-9 h-9 text-[#073861] cursor-pointer" onClick={toggleNav} />
            <div className="relative">
              <input
                type="text"
                placeholder="Recherche ..."
                className="bg-[#EAEEF3] px-5 py-1 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-[#073861] focus:ring-opacity-50 placeholder:text-black placeholder:font-thin placeholder:italic placeholder:text-sm"
                required
              />
              <IoMdSearch className="absolute right-2 top-2 text-[#828486]" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-5 items-center absolute right-8">
        <div className="flex items-start">
          <IoIosNotificationsOutline className="w-9 h-9" />
          <div className="rounded-full w-4 h-4 bg-red-500 text-white text-[0.5rem] font-bold flex justify-center items-center relative -left-5">
            3
          </div>
        </div>
        <div className="flex gap-3 justify-center items-center bg-[#EAEEF3] rounded-full">
          <Image
            src="/images/moi.png"
            alt="Moi"
            width={40}
            height={40}
          />
          <p className="font-medium">Anna_Shud</p>
          <FaAngleDown className="mr-3" />
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;

import React from 'react'
import Image from "next/image";
import { FaUser } from 'react-icons/fa';
import { BiSolidUser } from "react-icons/bi";

const LoginHeader = () => {
  return (
    <div className='flex gap-[68rem] items-center bg-white drop-shadow-md'>
      <div className='flex justify-center items-center px-6 bg-[#073861]'>
        <Image
            src="/images/icone_logo.png"
            alt="School Admin logo"
            width={50}
            height={50}
            className=""
        />
        <p className='font-bold text-white'>School Admin</p>
      </div>
      <div className='flex gap-3 items-center bg-[#EAEEF3] rounded-full'>
        <div className='w-10 h-10 border-2 border-[#073861] rounded-full bg-[#FFAB00] flex justify-center items-center'><BiSolidUser className='text-[#073861] w-6 h-6' /></div>
        <p className='font-medium text-[#073861] mr-5'>Connexion</p>
      </div>
    </div>
  )
}

export default LoginHeader

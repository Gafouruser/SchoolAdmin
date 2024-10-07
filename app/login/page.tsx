"use client"
import Footer from '@/app/Components/Footer';
import LoginHeader from '@/app/Components/LoginHeader'
import React from 'react'
import { FaRegUser } from "react-icons/fa6";
import { GrFormView } from "react-icons/gr";
import { useRouter } from 'next/navigation'; // Utilise useRouter de Next.js

const Login = () => {
    const router = useRouter(); // Initialisation de useRouter

    const handleConnect = () => {
      router.push('/admin-dashboard'); // Redirection vers la page AdminDashboard
    }

  return (
    <div className='bg-[#D9D9D9] h-screen'>
      <LoginHeader/>
      <div className='mt-16 mb-16 drop-shadow-md flex justify-center items-center'>
        <div className='bg-[#073861] w-96 h-[30rem] rounded-l-3xl flex flex-col gap-10 justify-center items-center'>
            <p className='font-bold text-white text-3xl'>Bienvenue !</p>
            <p className='text-white text-center text-sm font-light'>Connectez-vous pour accéder à <br /> toutes les informations scolaires <br /> en un seul clic.</p>
        </div>
        <div  className='bg-white w-96 h-[30rem] rounded-r-3xl flex flex-col gap-10 justify-center items-center'>
            <p className='font-bold text-[#FFAB00] text-3xl'>Connectez-vous</p>
            <div className="relative">
            <input
              type="text"
              placeholder="Identifiant"
              className="bg-[#EAEEF3] px-5 py-2 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-[#073861] focus:ring-opacity-50 placeholder:text-black placeholder:font-thin"
              required
            />
            <FaRegUser className="absolute right-3 top-3 text-[#828486]" />
          </div>
          <div className="relative">
            <input
              type="password"
              placeholder="Mot de passe"
              className="bg-[#EAEEF3] px-5 py-2 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-[#073861] focus:ring-opacity-50 placeholder:text-black placeholder:font-thin"
              required
            />
            <GrFormView className="absolute w-8 h-8 right-1.5 top-1.5 text-[#828486]" />
          </div>
            <a href='' className='italic text-sm font-light'>Mot de passe oublié</a>
            <button type='button' onClick={handleConnect} className='bg-[#FFAB00] text-white text-sm px-12 py-2 font-bold rounded-xl hover:bg-[#073861] transition'>Connecter</button>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Login;

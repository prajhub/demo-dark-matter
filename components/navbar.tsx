
"use client"
import Image from "next/image"
import DarkLogo from '@/public/dark_log.png'


export default function Navbar() {

    return (
       
<nav className="bg-black  border-gray-200  ">
  <div className="absolute bg-black container  mx-auto     flex  items-center justify-between p-2">
    <a href="/" className="flex items-center">
        
        <Image src={DarkLogo} width='250' className="ml-10" quality={90} height='250' alt="Dark Matter Logo"  />
    </a>
   
    
      <ul   className=" hidden md:flex flex-row">
      <li className='font-bold  text-md p-8'>Home</li>
          <li className='font-bold text-md p-8'>About</li>
          <li className='font-bold text-md p-8'>Games</li>
          <li className='font-bold text-md p-8'>Services</li>
          <li className='font-bold text-md p-8'>Careers</li>
          <li className='font-bold text-md p-8'>Contact</li>
      </ul>
    
  </div>
</nav>

    )
}
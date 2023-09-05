

import Image from "next/image"
import DarkLogo from '@/public/dark_log.png'
import Link from "next/link"


export default function Navbar() {

    return (
       
<nav className="bg-black z-[999] relative  border-gray-200  ">
  <div className="absolute bg-black container  mx-auto     flex  items-center justify-between p-2">
    <Link href="/" className="flex items-center">
        
        <Image src={DarkLogo} width='250' className="ml-10" quality={90} height='250' alt="Dark Matter Logo"  />
    </Link>
   
    
      <ul   className=" hidden md:flex flex-row ">
       
      <Link href='/'><li className='font-bold text-white hover:cursor-pointer hover:text-gray-400 text-md p-8'>Home</li></Link>
          <Link href='/about'><li className='font-bold text-md text-white hover:cursor-pointer hover:text-gray-400 p-8'>About</li></Link>
          <Link href='/games'>  <li className='font-bold text-md text-white hover:cursor-pointer hover:text-gray-400 p-8'>Games</li></Link>
          <Link href='/services'> <li className='font-bold text-md text-white hover:cursor-pointer hover:text-gray-400 p-8'>Services</li></Link>
          <Link href='/careers'> <li className='font-bold text-md text-white hover:cursor-pointer hover:text-gray-400 p-8'>Careers</li></Link>
          <Link href='/contact'> <li className='font-bold text-md text-white hover:cursor-pointer hover:text-gray-400 p-8'>Contact</li></Link>
      </ul>
    
  </div>
</nav>

    )
}
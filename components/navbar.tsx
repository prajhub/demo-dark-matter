
"use client"
import Image from "next/image"
import DarkLogo from '@/public/dark_log.png'

export default function Navbar() {

    return (
       
<nav className="bg-black  border-gray-200 ">
  <div className="absolute bg-black  w-full flex  items-center justify-between p-2">
    <a href="/" className="flex items-center">
        
        <Image src={DarkLogo} width='250' quality={90} height='250' alt="Dark Matter Logo"  />
    </a>
   
    
      <ul   className="flex flex-row">
      <li className='font-bold hidden md:block text-md p-8'>Home</li>
          <li className='font-bold text-md p-8'>Destinations</li>
          <li className='font-bold text-md p-8'>Reservations</li>
          <li className='font-bold text-md p-8'>Amenities</li>
          <li className='font-bold text-md p-8'>Rooms</li>
      </ul>
    
  </div>
</nav>

    )
}
import Image from "next/image"
import service from '@/public/services.png'


export default function ContactMain() {

    return (
        <div className='w-full h-screen'>
      <Image
        className='top-0 left-0 w-full h-screen object-cover'
        src={service}
        alt='/'
      />
      <div className='bg-black/40 absolute top-0 left-0 w-full h-screen' />
      <div className='absolute top-0 w-full h-full flex flex-col justify-end py-8 text-white'>
        <div className='md:left-[10%] max-w-[1100px] m-auto absolute p-4'>
          <p className=" text-3xl drop-shadow-2xl">Let's Get in Touch,</p>
          <h1 className='font-bold text-3xl mt-5 md:text-5xl drop-shadow-2xl'>
            Contact Us!
          </h1>
          
        </div>
      </div>
    </div>
    )
}
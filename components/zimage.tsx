"use client"
import Image from "next/image"
import coins from '@/public/coins.png'

export default function ZImage() {
    return (
        <div className='bg-black/10 absolute top-0 left-0 w-full h-screen' >
            <Image src={coins} className=" mt-96" quality={100} alt="Coins"/>
        </div>
    )
}
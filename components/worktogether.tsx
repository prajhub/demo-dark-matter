"use client"

export default function WorkTogether() {
    return (
        <section className="max-w-full bg-white py-14 ">
            <div className="flex  flex-col items-center py-10">
                <h1 className=" text-black font-bold text-5xl tracking-wide">Let's Work Together</h1>
                <p className=" font-lg text-2xl py-6 text-black">We serve difference!</p>
            </div>

            <div className="flex md:flex-row flex-col items-center max-w-[1200px] mx-auto gap-12 ">
                <div className="max-w-sm p-6 bg-white border border-gray-200  rounded-3xl  shadow-2xl">

                    <h5 className="mb-2 text-4xl  tracking-wider font-bold  text-black">Game Development</h5>
                    <span className="text-black">----------------------------------------------------------------</span>

                    <p className="mb-3 text-lg  font-normal text-gray-700 dark:text-gray-400">Bring digital dreams to life, crafting engaging and immersive experiences for players.</p>
                    <button className="text-white  leading-loose tracking-wide   bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-md py-2 px-12 text-center mr-2 mt-2 mb-2">See More</button>
                </div>
                <div className="max-w-sm p-6 bg-white border border-gray-200  rounded-3xl shadow-2xl">

                    <h5 className="mb-2 text-4xl  tracking-wider font-bold  text-black">Software Development</h5>
                    <span className="text-black">--------------------------------------------------------------------</span>

                    <p className="mb-3 text-lg  font-normal text-gray-700 dark:text-gray-400">Bring digital dreams to life, crafting engaging and immersive experiences for players.</p>
                    <button className="text-black border  hover:bg-gray-100 hover:border-none border-blue-700 leading-loose tracking-wide     font-medium rounded-full text-md py-2 px-12 text-center mr-2 mt-2 mb-2">See More</button>
                </div>
                <div className="max-w-sm p-6 bg-blue-700 border border-gray-200  rounded-3xl shadow-2xl">

                    <h5 className="mb-2 text-4xl   tracking-wider font-bold  text-white">Other Services</h5>
                    <span className="text-white ">---------------------------------------------------------------</span>

                    <p className="mb-3  text-white mt-9 text-3xl font-semibold">Discover Now</p>
                    <button className="text-black border bg-white hover:bg-gray-300  border-blue-700 leading-loose tracking-wide     font-medium rounded-full text-md py-2 px-12 text-center mr-2 mt-14 mb-2">Services</button>
                </div>
            </div>

        </section>
    )
}
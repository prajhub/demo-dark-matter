export default function OpenPosition() {

    return (
        <section className="max-w-full bg-gray-200 py-10 md:py-20">
            <div className="flex flex-col items-center py-10">
                <div className="text-black flex flex-col py-2 px-4  max-w-[1050px] mx-auto">
                    <h1 className=" text-center md:mt-4 font-bold mb-5 md:text-5xl text-4xl tracking-wide">Open Positions</h1>


                </div>

            </div>
            <div className="flex flex-col mx-auto max-w-[1000px]">
                <div className="flex flex-col gap-3 ml-5 md:-ml-3">
                    <span className=" text-black font-bold md:text-3xl text-2xl tracking-wider">Engineers</span>
                    <div className="border-t border-solid border-black"></div>
                    <div className="flex items-center justify-between">
                        <p className="text-black md:text-3xl text-lg font-lg py-2">Senior Game Engineer</p>
                        <button className="text-black border bg-white hover:bg-gray-300 border-blue-700 leading-loose tracking-wide font-medium rounded-full text-md py-2 md:px-12 px-10 mr-4 text-center ml-2">Know More</button>
                    </div>
                    <div className="border-t border-solid border-black"></div>
                    <p className="text-black md:text-3xl text-lg font-lg py-2">QA Engineer</p>
                    <div className="border-t border-solid border-black"></div>
                </div>

                <div className="flex ml-5 md:-ml-3 mt-14 md:mt-32 flex-col gap-3">
                    <span className=" text-black font-bold md:text-3xl text-2xl tracking-wider">Art</span>
                    <div className="border-t border-solid border-black"></div>
                    <div className="flex items-center justify-between">
                        <p className="text-black md:text-3xl text-lg font-lg py-2">Concept Artist</p>
                        <button className="text-black border bg-white hover:bg-gray-300 border-blue-700 leading-loose tracking-wide font-medium rounded-full text-md py-2 md:px-12 px-10 mr-4 text-center ml-2">Know More</button>
                    </div>
                    <div className="border-t border-solid border-black"></div>
                    <p className="text-black md:text-3xl text-lg font-lg py-2">3D Artist</p>
                    <div className="border-t border-solid border-black"></div>
                    <p className="text-black md:text-3xl text-lg font-lg py-2">2D Animator</p>
                    <div className="border-t border-solid border-black"></div>
                    <p className="text-black md:text-3xl text-lg font-lg py-2">VFX Artist</p>
                    <div className="border-t border-solid border-black"></div>
                </div>

                <div className="flex ml-5 md:-ml-3 mt-14 md:mt-32 flex-col gap-3">
                    <span className=" text-black font-bold md:text-3xl text-2xl tracking-wider">Game Analytics</span>
                    <div className="border-t border-solid border-black"></div>
                    <div className="flex items-center justify-between">
                        <p className="text-black md:text-3xl text-lg font-lg py-2">Senior Data Analyst</p>

                    </div>
                    <div className="border-t border-solid border-black"></div>

                </div>

                <div className="flex ml-5 md:-ml-3 mt-14 md:mt-32 flex-col gap-3">
                    <span className=" text-black font-bold md:text-3xl text-2xl tracking-wider">Game Design</span>
                    <div className="border-t border-solid border-black"></div>
                    <div className="flex items-center justify-between">
                        <p className="text-black md:text-3xl text-lg font-lg py-2">Lead Game Designer</p>

                    </div>
                    <div className="border-t border-solid border-black"></div>

                </div>

                <div className="flex ml-5 md:-ml-3 mt-14 md:mt-32 flex-col gap-3">
                    <span className=" text-black font-bold md:text-3xl text-2xl tracking-wider">Marketing</span>
                    <div className="border-t border-solid border-black"></div>
                    <div className="flex items-center justify-between">
                        <p className="text-black md:text-3xl text-lg font-lg py-2">Project Manager</p>

                    </div>
                    <div className="border-t border-solid border-black"></div>
                    <div className="flex items-center justify-between">
                        <p className="text-black md:text-3xl text-lg font-lg py-2">Senior User Acquisition Manager</p>

                    </div>
                    <div className="border-t border-solid border-black"></div>

                </div>



            </div>
        </section>
    )
}
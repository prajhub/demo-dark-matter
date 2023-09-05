import ContactForm from "./contactform";

export default function ContactTalk() {

    return (
        <section className="w-full bg-white">

<div className="flex flex-col items-center bg-white py-10">
                <div className="text-black flex flex-col py-2 px-4  max-w-[1200px] mx-auto">
                    <h1 className=" text-center md:mt-4 font-bold md:text-6xl text-4xl tracking-wide">Let's Talk</h1>

                    <div className="md:mt-16 mt-12 md:w-[600px] ">
                        <ul className="flex flex-col gap-7">
                            <li className="flex  items-center justify-between">
                                <p className="font-bold">General Queries</p>
                                <p>contact@darkmattergame.net</p>
                            </li>
                            <li className="flex  items-center justify-between">
                                <p className="font-bold">Player Support</p>
                                <p>contact@darkmattergame.net</p>
                            </li>
                            <li className="flex items-center justify-between">
                                <p className="font-bold">Business Development</p>
                                <p>contact@darkmattergame.net</p>
                            </li>
                            <li className="flex  items-center justify-between">
                                <p className="font-bold">Media</p>
                                <p>contact@darkmattergame.net</p>
                            </li>
                            <li className="flex  items-center justify-between">
                                <p className="font-bold">Career</p>
                                <p>contact@darkmattergame.net</p>
                            </li>
                        </ul>
                    </div>

                </div>
                </div>

                <ContactForm/>
        </section>
    )
}
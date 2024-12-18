import { Sparkles } from "lucide-react"
import Companies from "./Companies"

function Hero() {
    return (
        <div className="flex flex-col overflow-hidden">
            <div className="flex flex-col mt-12 space-y-8 text-white lg:flex-row">
                <div className="flex flex-col justify-between space-y-12 lg:space-y-0 lg:w-1/2 z-20">
                    <div className="flex flex-col items-center space-y-2 lg:items-start">
                        <div className="px-3 text-sm py-1 flex items-center border rounded-full text-[#358028] bg-stone-800 border-[#358028]">Team Management <Sparkles className="ml-2" size={16} /></div>
                        <h2 className="text-3xl font-bold text-center md:text-4xl lg:text-5xl xl:text-6xl md:text-start">Effortless Team Building for Seamless Collab.</h2>
                    </div>
                    <p className="w-full text-base text-center md:text-lg lg:w-11/12 lg:text-justify lg:text-base">Accelerate team success effortlessly with our solution. Streamline team building proccesses and achieve optimal collabaoration for faster and easier project outcomes.</p>
                    <div className="flex border bg-[#212E0A] border-[#224B1B] w-full lg:w-fit justify-between rounded-full bg-#0A0E03]">
                        <input
                            type="text"
                            className="px-3 py-1 bg-transparent placeholder:text-gray-500 focus:ring-0 focus:outline-none" placeholder="Your Email"
                        />
                        <button className="text-black p-2 bg-[#13F287] rounded-full text-sm md:text-base">Request a demo</button>
                    </div>
                </div>
                <div className="relative w-full bg-red-300 lg:w-1/2">
                    <div className="absolute w-full h-full bg-gradient-to-b from-transparent to-black/70" />
                    <img
                        className="object-cover w-full h-full rounded-md"
                        src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="Brainstorm"
                    />
                </div>
            </div>
            <Companies />
        </div>
    )
}

export default Hero
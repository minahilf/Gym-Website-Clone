import Image from "next/image";
import { Crimson_Text } from "next/font/google";
import locker from "../../../Public/locker.png"
import wifi from "../../../Public/wifi.png"
import drink from "../../../Public/drink.png"
import gym from "../../../Public/gym.png"
import room from "../../../Public/room.png"
import trainer from "../../../Public/trainer.png"

const crimson = Crimson_Text({ 
    subsets: ["latin"], 
    weight: ["400", "600", "700"], 
    variable: "--font-crimson" 
});

const facility = [
    {src: locker, alt: "locker", heading: "Lockers and Towels", para: "Clean, safe and sanitary environment to keep your stuffs."},
    {src: wifi, alt: "wifi", heading: "Free Wifi", para: "Stay connected to the world while you work yourself out."},
    {src: drink, alt: "drink", heading: "Complimentary Drinks", para: "We make sure that you stay hydrated so that you can push yourself to the limit."},
    {src: gym, alt: "gym", heading: "Hightech Gym", para: "Build yourself with the best available equipments in the market."},
    {src: room, alt: "room", heading: "Changing Room", para: "Sanitary changing room with proper privacy."},
    {src: trainer, alt: "trainer", heading: "Personal Trainer", para: "You benefit from the monthly care of a Personal Trainer."}

]

export default function Facilities(){
    return(
        <div className={`${crimson.variable} bg-black `}>
            <div className=" text-center py-10 ">
            <h2 className="text-white text-3xl font-crimson">
                Our<span className="text-[#FCF43D] font-bold"> Facilities</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  px-[8%] mt-4 justify-center items-center">
                {facility.map((item, index) => (
                    <div key={index} className="flex items-start">
                        <div className="w-20 h-20 relative mr-4">
                            <Image 
                                src={item.src}
                                alt={item.alt}
                                fill
                                className="w-[200px] h-[40px] rounded-md"
                            />
                        </div>
                        <div className="flex flex-col justify-start items-start">
                            <h3 className="text-white text-[14px] font-medium mb-1 font-crimson lg:text-[16px]">{item.heading}</h3>
                            <p className="text-gray-400 text-[12px] font-crimson text-left sm:w-[70%] lg:text-[14px]">
                                {item.para}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
</div>
    )
}
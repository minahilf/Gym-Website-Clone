import Image from "next/image";
import { Crimson_Text } from "next/font/google";
import h1 from "../../../Public/h1.png"
import h2 from "../../../Public/h2.png"
import h3 from "../../../Public/h3.png"
import h4 from "../../../Public/h4.png"
import h5 from "../../../Public/h5.png"
import h6 from "../../../Public/h6.png"

const crimson = Crimson_Text({ 
    subsets: ["latin"], 
    weight: ["400", "600", "700"], 
    variable: "--font-crimson" 
});

export default function Trainers(){
    const trainers = [
        { src: h1, alt: "Amir Shrestha", name: "Amir Shrestha" },
        { src: h2, alt: "Christina Thapa", name: "Christina Thapa" },
        { src: h3, alt: "Sunil Chetri", name: "Sunil Chetri" },
        { src: h4, alt: "Priya K.C", name: "Priya K.C" },
        { src: h5, alt: "Santosh Adhikari", name: "Santosh Adhikari" },
        { src: h6, alt: "Rina Pun", name: "Rina Pun" }
      ];

    return(
        <div className={`${crimson.variable} bg-black `}>
            <div className=" text-center flex flex-col gap-2 justify-center items-center">
            <h2 className="text-white text-3xl font-crimson">
                Meet Our<span className="text-[#FCF43D] font-bold"> Trainers</span>
            </h2>
            <p className="text-white font-crimson hover:underline cursor-pointer">View All</p>
        </div>

        <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide mt-2 px-2 xl:justify-center xl:items-center">
                {trainers.map((trainer, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <div className="w-[150px] h-[150px] lg:w-[200px] lg:h-[200px] relative mb-2 overflow-hidden">
                            <Image 
                                src={trainer.src} 
                                alt={trainer.alt} 
                                fill
                                className="object-cover"
                            />
                        </div>
                        <p className="font-crimson text-white text-base">
                            {trainer.name}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}
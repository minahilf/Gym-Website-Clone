import Image from "next/image";
import g1 from "../../../Public/g1.png"
import g2 from "../../../Public/g2.png"
import star from "../../../Public/Star 1.png"
import { Crimson_Text } from "next/font/google";

const crimson = Crimson_Text({ 
    subsets: ["latin"], 
    weight: ["400", "600", "700"], 
    variable: "--font-crimson" 
});

export default function Family(){
    return(
<div className={`${crimson.variable} bg-black px-4`}>
<div className=" text-center py-10">
            <h2 className="text-white text-3xl font-crimson">
                Stories of our <span className="text-[#FCF43D] font-bold">Vyayamshala</span> Family
            </h2>
        </div>


    <div className="flex flex-col justify-center items-center sm:flex-row sm:gap-4">
        <div className="flex flex-col justify-center items-center gap-1">
        <Image src={g1} alt="before" className="w-[200px] h-[200px] lg:w-[250px] lg:h-[250px]"/>
        <p className="font-crimson text-white">Before</p>
        </div>
        
        <div className="flex flex-col justify-center items-center gap-1">
        <Image src={g2} alt="after" className="w-[200px] h-[200px] lg:w-[250px] lg:h-[250px]"/>
        <p className="font-crimson text-white">After</p>
        </div>
    </div>

        <div className="flex flex-col justify-center items-center">
        <p className="my-4 font-crimson text-[20px] text-white text-center lg:w-[70%] xl:w-[50%] lg:text-[24px]">&quot;
        A complete package to all the fitness freaks out there. Join soon and test yourself. Vyayamshalas layouts, environment and its surrounding itself plays vital role to motivate and go beyond your limitation.&quot;
        </p>
        </div>

        <div className="flex gap-2 justify-center">
            <Image src={star} alt="star" />
            <Image src={star} alt="star" />
            <Image src={star} alt="star" />
            <Image src={star} alt="star" />
            <Image src={star} alt="star" />
        </div>
        <p className="font-crimson text-gray-300 text-center mt-2">John Doe, Student</p>
    </div>
    )
}

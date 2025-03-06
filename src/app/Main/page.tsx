import Image from "next/image";
import { Crimson_Text } from "next/font/google";
import man from "../../../Public/man.png"
import play from "../../../Public/play.png"

const crimson = Crimson_Text({ subsets: ["latin"], weight: ["400", "600", "700"], variable: "--font-crimson" });

export default function Main(){
    return(
        <div className={`${crimson.variable} bg-black p-6 sm:p-10 lg:p-[5%] flex flex-col sm:flex-row`}>
            <div className="lg:flex lg:flex-col lg:gap-4">
            {/* headings  */}
            <h1 className="font-crimson text-white text-[30px] text-center sm:text-left sm:text-[42px] sm:w-[70%] lg:w-[50%] xl:text-[56px]">Join The World Of Fitness.</h1>
            <p className="font-crimson text-white text-[14px] text-center sm:text-left sm:w-[80%] sm:text-[16px] lg:w-[60%] xl:text-[20px]">Our aim is to bring more people into fitness so that every indivisual, family,society and whole nation.
            </p>

            {/* buttons */}
            <div className="flex gap-6 justify-center items-center mt-4 sm:justify-start sm:items-start">
                {/* button 1 */}
                <div className="bg-[#FCF43D] w-[100px] h-[30px] p-4 flex justify-center items-center rounded-full">
                    <button className="font-crimson xl:text-[15px]">Join Now</button>
                </div>
{/* button 2 */}
                <div className="flex items-center gap-1">
                <div className="w-[30px] h-[30px] rounded-full bg-white flex items-center justify-center">
                    <Image src={play} alt="play" />
                </div>
                <p className="font-crimson text-white xl:text-[15px]">Watch Video</p>
                </div>
            </div>

            {/* views */}
            <div className="mt-4 flex justify-center items-center gap-8 sm:justify-start sm:items-start">
            <div className="flex flex-col items-center justify-center">
                <p className="font-crimson text-[14px] sm:text-[16px] text-[#FCF43D]">7</p>
                <p className="font-crimson text-[14px] sm:text-[16px] text-white">Years</p>
                <p className="font-crimson text-[14px] sm:text-[16px] text-white">Experience</p>
            </div>

            <div className="flex flex-col items-center justify-center">
                <p className="font-crimson text-[14px] sm:text-[16px] text-[#FCF43D]">25k+</p>
                <p className="font-crimson text-[14px] sm:text-[16px] text-white">Happy</p>
                <p className="font-crimson text-[14px] sm:text-[16px] text-white">Customers</p>
            </div>

            <div className="flex flex-col items-center justify-center">
                <p className="font-crimson text-[14px] sm:text-[16px] text-[#FCF43D]">95</p>
                <p className="font-crimson text-[14px] sm:text-[16px] text-white">Gym</p>
                <p className="font-crimson text-[14px] sm:text-[16px] text-white">Trainers</p>
            </div>
</div>
</div>
{/* man */}
<div className="mt-2">
    <Image src={man} alt="gym-guy" className="sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px]"/>
</div>
        </div>
    )
}
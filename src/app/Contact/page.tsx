import Image from "next/image";
import { Crimson_Text } from "next/font/google";
import r6 from "../../../Public/r6.png";

const crimson = Crimson_Text({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
    variable: "--font-crimson"
});

export default function Contact(){
    return(
        <div className={`${crimson.variable} bg-black pt-4 w-full`}>
            <div className="text-center flex flex-col gap-2 justify-center items-center mb-8">
                <h2 className="text-white text-3xl font-crimson">
                    Whats<span className="text-[#FCF43D] font-bold"> Stopping</span> You?
                </h2>
            </div>
            
          
            <div className="flex flex-col md:flex-row w-full">

                <div className="w-full md:w-1/2 relative">
                    <Image 
                        src={r6} 
                        alt="builder" 
                        className="w-full h-full object-cover"
                        layout="responsive"
                        priority
                    />
                </div>
                
              
                <div className="w-full md:w-1/2 bg-white px-6 py-8 md:px-10 flex flex-col justify-center items-center">
                    <p className="font-crimson text-black font-bold text-[18px] text-center lg:text-[22px] xl:text-[26px]">
                        Become a part of our family?
                    </p>
                    <p className="font-crimson text-black text-[14px] text-center mb-4 lg:text-[16px] xl:text-[20px]">
                        Leave your details and we will get back to you!
                    </p>
                    <input 
                        type="text" 
                        placeholder="Full Name" 
                        className="border border-gray-400 rounded-2xl mt-2 p-2 w-full max-w-[250px] font-crimson lg:max-w-[350px]"
                    />
                    <input 
                        type="text" 
                        placeholder="Phone Number" 
                        className="border border-gray-400 rounded-2xl mt-2 p-2 w-full max-w-[250px] font-crimson lg:max-w-[350px]"
                    />
                    <div className="bg-[#FCF43D] w-[100px] h-[40px] rounded-full flex justify-center items-center mt-4">
                        <button className="font-crimson text-black">Join Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
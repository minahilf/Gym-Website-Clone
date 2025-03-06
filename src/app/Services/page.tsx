import Image from "next/image";
import { Crimson_Text } from "next/font/google";

const crimson = Crimson_Text({ 
    subsets: ["latin"], 
    weight: ["400", "600", "700"], 
    variable: "--font-crimson" 
});

const servicesData = [
    { src: "/y1.png", alt: "Whole body fat loss", label: "Whole Body Fat Loss" },
    { src: "/y2.png", alt: "Zumba", label: "Zumba" },
    { src: "/y3.png", alt: "Yoga", label: "Yoga" },
    { src: "/y4.png", alt: "Bodybuilding", label: "Bodybuilding" },
    { src: "/y5.png", alt: "Aerobics", label: "Aerobics" },
    { src: "/y6.png", alt: "Free Weights", label: "Free Weights" }
];

export default function Services() {
    return (
        <div className={`${crimson.variable} bg-black px-6 py-8 sm:flex`}>
            {/* Content */}
            <div className="flex flex-col justify-center items-center gap-4 sm:items-start sm:justify-start lg:pl-8">
                <p className="text-[#FCF43D] font-crimson text-lg ">Services</p>
                <h2 className="text-white font-crimson text-2xl sm:text-3xl  text-center sm:text-left sm:w-[60%]">
                    We provide the best service for you.
                </h2>
                <p className="text-white text-base font-crimson sm:text-lg text-center sm:text-left sm:w-[80%] leading-relaxed">
                    Strive for greatness with the best, around the best, in the best fitness environment available in the city.
                </p>
                <button className="bg-white font-crimson text-black text-lg px-5 py-2 rounded-full">
                    See All
                </button>
            </div>

            {/* Services Icons */}
            <div className="grid grid-cols-2 sm:grid-cols-3 w-full gap-6 justify-center items-center mt-6 sm:mt-0">
                {servicesData.map((service, index) => (
                    <div key={index} className="flex flex-col justify-center items-center gap-2">
                        <div className="w-[70px] p-2 h-[60px]  bg-[#FCF43D]">
                        <Image 
                            src={service.src} 
                            alt={service.alt} 
                            width={60} 
                            height={60} 
                            priority 
                            className="object-contain"
                        />
                        </div>
                        <p className="text-white font-crimson text-sm font-medium text-center">
                            {service.label}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

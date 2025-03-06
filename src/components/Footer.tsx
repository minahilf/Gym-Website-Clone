import Image from "next/image";
import map from "../../Public/map.png"
import icon from "../../Public/icon.png"
import { Crimson_Text } from "next/font/google";

const crimson = Crimson_Text({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
    variable: "--font-crimson"
});

export default function Footer(){
    return(
        <footer className={`${crimson.variable} bg-black pt-10`}>
            <div className="sm:flex sm:justify-evenly sm:gap-10 ">
            <div className="flex flex-col gap-4 sm:gap-6 lg:gap-10 sm:flex-row ">
            <ul className="font-crimson text-[16px] text-white xl:text-[18px]">
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Team</li>
                <li>FAQs</li>
                <li>Careers</li>
                <li>Contact Us</li>
            </ul>

            <ul  className="font-crimson text-[14px] text-white xl:text-[16px]">
                <li className="text-[20px]">Contact</li>
                <li>Lakeside 15th Street</li>
                <li>Pokhara, Nepal</li>
                <li>+977-10161-467701</li>
            </ul>
            </div>

            <Image src={map} alt="map" className="mt-4 sm:w-[300px] sm:h-[200px]"/>
            </div>

            <div className="flex flex-col gap-4 mt-4 sm:flex-row sm:justify-between sm:items-center">
            <p className="font-crimson text-white text-[12px]">Copyright &copy; 2021 Vyayamshala</p>
            <Image src={icon} alt="icon" className="sm:w-[100px]"/>
            <p className="font-crimson text-white text-[12px]">Developed by Minahil Fatima</p>
            </div>
        </footer>
    )
}
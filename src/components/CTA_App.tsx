import { ctaAppData } from "../../data/index";
import Image from "next/image";
import { BiLogoApple } from "react-icons/bi";
import { BsGooglePlay } from "react-icons/bs";



export function CTA_App() {
    return (
        <section className="flex flex-col items-center lg:flex-row py-10 mt-40" id="Plataformas">
            <div className="flex flex-col items-center justify-center lg:justify-around lg:flex-row w-full max-w-4xl gap-8">
                {ctaAppData.map((item, index) => {
                    return (
                        <div className="grid grid-cols-1 lg:grid-cols-2" key={index}>
                            <div className="text-center lg:text-left">
                                <h1 className="text-gradient font-bold text-3xl lg:text-[35px]">{item.title}</h1>
                                <p className="text-gray-200 mt-2">{item.description}</p>
                                <div className="flex flex-col lg:flex-row gap-6 mt-6">
                                <button className="flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-[#FF9E00] text-white font-semibold duration-700 transition-all hover:scale-105">
                                    <a href="#" className="flex items-center gap-2">
                                        <BsGooglePlay className="text-gradient-white" size={24} /> Google Play
                                    </a>
                                </button>
                                <button className="flex items-center justify-center gap-2 px-4 py-2 rounded-md border bg-transparent transition-all duration-700 hover:bg-[#FF9E00] border-[#FF9E00] text-white font-semibold">
                                    <a href="#" className="flex items-center gap-2">
                                        <BiLogoApple className="text-[#FF9E00] transition-all duration-700 hover:text-white" size={24} /> App Store
                                    </a>
                                </button>
                            </div>
                        </div>
                            </div>
                    );
                })}
            </div>
            <div className="mt-20 lg:mt-0">
                <Image src="/StoresApp.svg" quality={100} width={300} height={300} alt="" />
            </div>
        </section>
    );
}
import Image from "next/image";
import { PiDiscordLogo, PiInstagramLogo, PiWhatsappLogo, PiYoutubeLogo } from "react-icons/pi";


export function Footer() {
    return (
        <footer className="mt-40 lg:mt-80">
            <div className="flex justify-center items-center">
                <Image src="/DevStreak.svg" width={1400} height={600} alt="" className="animate-bounce" />
            </div>
            <div className="bg-gradient-to-t from-[#0d0d0d] to-[#000]">
            <div className=" mt-1 lg:-mt-8 w-full flex justify-center lg:justify-around flex-col lg:flex-row lg:p-12 rounded-lg">
                <div className="flex justify-center lg:justify-start mt-8 lg:mt-0 mb-8 lg:mb-0">
                    <Image src="/Logo.svg" width={200} height={200} alt="" />
                </div>
                <ul className="flex flex-col justify-center items-center gap-4 mb-8 lg:mb-0">
                    <h1 className="text-3xl text-gradient-white font-primary text-center">Navegação</h1>
                    <li className="text-white/80 font-extralight transition-all duration-300 hover:text-[#FF9E00]">
                        <a href="#Home">Home</a>
                    </li>
                    <li className="text-white/80 font-extralight transition-all duration-300 hover:text-[#FF9E00]">
                        <a href="#ComoFunciona">Como Funciona</a>
                    </li>
                    <li className="text-white/80 font-extralight transition-all duration-300 hover:text-[#FF9E00]">
                        <a href="#Diferenciais">Diferenciais</a>
                    </li>
                    <li className="text-white/80 font-extralight transition-all duration-300 hover:text-[#FF9E00]">
                        <a href="#Plataformas">Plataformas</a>
                    </li>
                    <li className="text-white/80 font-extralight transition-all duration-300 hover:text-[#FF9E00]">
                        <a href="#Depoimentos">Depoimentos</a>
                    </li>
                    <li className="text-white/80 font-extralight transition-all duration-300 hover:text-[#FF9E00]">
                        <a href="#Contato">Contato</a>
                    </li>
                </ul>
                <ul className="flex flex-col justify-center items-center">
                    <h1 className="text-3xl text-gradient-white font-primary text-center">Social</h1>
                    <div className="grid grid-cols-2 gap-4 mt-8">
                        <a href="" target="_blank" rel="noopener noreferrer" aria-label="Whatsapp">
                            <PiWhatsappLogo size={30} className="text-white transition-all duration-300 hover:text-[#FF9E00]" />
                        </a>
                        <a href="" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <PiInstagramLogo size={30} className="text-white transition-all duration-300 hover:text-[#FF9E00]" />
                        </a>
                        <a href="" target="_blank" rel="noopener noreferrer" aria-label="Discord">
                            <PiDiscordLogo size={30} className="text-white transition-all duration-300 hover:text-[#FF9E00]" />
                        </a>
                        <a href="" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                            <PiYoutubeLogo size={30} className="text-white transition-all duration-300 hover:text-[#FF9E00]" />
                        </a>
                    </div>
                </ul>
            </div>
            <div className="mt-20 border-t border-white/50">
                <p className="text-white/80 font-extralight text-center mt-8">@2024 Copyright. Todos os Direitos Reservados | DevStreak</p>
            </div>
            </div>
        </footer>
    );
}
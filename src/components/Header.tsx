import Image from "next/image";

export function Header() {
    return (
        <header className="lg:mb-16">
            <nav className="hidden lg:flex justify-around items-center">
                <div>
                    <Image src="/Logo.svg" width={200} height={200} alt="" className="animate-bounce" data-aos="fade-down"  />
                </div>
                <ul className="flex justify-center gap-16">
                <li className="text-white/80 font-medium transition-all duration-300 hover:text-[#FF9E00]" data-aos="fade-down" data-aos-delay="100">
                        <a href="#Home">Home</a>
                    </li>
                    <li className="text-white/80 font-medium transition-all duration-300 hover:text-[#FF9E00]" data-aos="fade-down" data-aos-delay="100">
                        <a href="#ComoFunciona">Como Funciona</a>
                    </li>
                    <li className="text-white/80 font-medium transition-all duration-300 hover:text-[#FF9E00]" data-aos="fade-down" data-aos-delay="200">
                        <a href="#Diferenciais">Diferenciais</a>
                    </li>
                    <li className="text-white/80 font-medium transition-all duration-300 hover:text-[#FF9E00]" data-aos="fade-down" data-aos-delay="300">
                        <a href="#Plataformas">Plataformas</a>
                    </li>
                    <li className="text-white/80 font-medium transition-all duration-300 hover:text-[#FF9E00]" data-aos="fade-down" data-aos-delay="400">
                        <a href="#Depoimentos">Depoimentos</a>
                    </li>
                    <li className="text-white/80 font-medium transition-all duration-300 hover:text-[#FF9E00]" data-aos="fade-down" data-aos-delay="500">
                        <a href="#Contato">Contato</a>
                    </li>
                </ul>
                <div>
                    <button className="text-white font-secondary bg-gradient-to-r from-[#FF9E00] to-[#995F00] px-8 py-4 rounded-lg transition-all duration-700 hover:opacity-90 hover:scale-[1.1] mt-20 mb-20">
                        <a href="#Contato">Explore Agora!</a>
                    </button>
                </div>
            </nav>
        </header>
    )
}
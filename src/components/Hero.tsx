"use client"

import Image from "next/image";
import { heroData } from "../../data";

export function Hero() {
    return (
        <section className="relative mt-20 lg:mt-40" id="Home">
            <div className="flex flex-col-reverse justify-center lg:flex-row lg:justify-around">
                <div>
                    {heroData.map((item, index) => {
                        return (
                            <div key={index} className="mt-16">
                                <h1 className="font-bold text-center lg:text-left text-3xl lg:text-6xl text-gradient" data-aos="fade-up">
                                    {item.title}
                                </h1>
                            </div>
                        );
                    })}

                    <div className="mt-2 flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-0">
                        <div className="border-t border-b mt-6 border-white/20 w-[400px] mb-6 flex-shrink-0 flex justify-center">
                            <Image
                                src="/Peoples.png"
                                width={200}
                                height={200}
                                quality={100}
                                alt=""
                                className="mt-12"
                                data-aos="fade-left"
                            />
                        </div>
                        <p className="text-gray-400 text-center lg:text-left max-w-[50px] lg:ml-4">Seja o primeiro usuário ativo!</p>
                    </div>

                    <div className="flex gap-6 mt-6">
                        <Image src="/Arrow.png" width={100} height={100} alt="" className="transition-all duration-700 hover:scale-[1.2]" />
                        <p className="text-left text-gray-200 max-w-[350px]" data-aos="flip-up">
                            Aprenda, pratique e evolua na programação diariamente com o DevStreak. Apenas 5 minutos por dia podem fazer toda a diferença!
                        </p>
                    </div>
                </div>
               <div className=" lg:flex lg:-mt-20" data-aos="flip-up">
                    <Image src="/GroupHero.svg" width={1300} height={400} alt="" className="float elemento-flutuante" />
               </div>
            </div>
            <div className="flex justify-center mt-20">
                <Image src="/DevStreak.png" width={1400} height={500} alt="" className="animate-pulse" />
            </div>
        </section>
    );
}
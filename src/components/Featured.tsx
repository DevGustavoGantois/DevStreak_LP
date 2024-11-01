import { featuredData } from "../../data";

export function Featured() {
    return (
        <section className="py-10" id="ComoFunciona">
            <div className="flex flex-col justify-center">
                <h1 className="text-gradient text-center font-bold mt-40 text-3xl lg:text-5xl font-primary" data-aos="fade-up">
                    Funcionalidades Chave
                </h1>
                <p className="text-center mb-8 text-gray-400" data-aos="fade-up" data-aos-delay="200">
                    Aprenda programação de forma leve, com gameficações, bônus e muito mais!
                </p>
            </div>
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-32 justify-center items-center">
                {featuredData.map((item, index) => {
                    return (
                        <div
                            data-aos="fade-up"
                            key={index}
                            className="flex flex-col gap-6 p-8 lg:p-12 border border-[#FF9E00] rounded-lg duration-700 shadow-lg transition-transform transform hover:scale-105 hover:bg-gradient-to-r hover:from-[#FF9E00] hover:to-[#8C5A09] bg-[#1E1D1D]"
                        >
                            <div className="text-3xl text-gradient-white font-bold text-left mb-4">
                                <p>{item.number}</p>
                            </div>
                            <h1 className="mb-2 font-bold text-gradient-white text-center text-3xl font-primary">
                                {item.title}
                            </h1>
                            <p className="text-center text-white mb-6">{item.description}</p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
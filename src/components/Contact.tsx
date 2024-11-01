import { contactData } from "../../data";

export function Contact() {
    return (
        <section className="mt-40" id="Contato">
            <div className="p-6 lg:p-32 bg-gradient-to-t from-[#0d0d0d] to-black rounded-lg shadow-lg" data-aos="fade-up">
                <div className="flex flex-col justify-center items-center space-y-6">
                    {contactData.map((item, index) => (
                        <div key={index}>
                            <h1 className="text-center text-gradient-white font-primary text-3xl lg:text-6xl mt-20" data-aos="flip-up" data-aos-delay="200">
                                {item.title}
                            </h1>
                            <p className="text-center text-white mt-4 lg:mt-6" data-aos="flip-down" data-aos-delay="300">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
                <form action="" className="flex flex-col justify-center items-center mt-8 lg:mt-10 space-y-6" data-aos="fade-up" data-aos-delay="400">
                    <input
                        placeholder="Digite o seu melhor email"
                        type="email"
                        name="email"
                        id="email"
                        required
                        className="outline-none bg-transparent border border-white/50 rounded-lg w-full lg:w-[900px] px-4 py-3 text-white placeholder:text-white/60"
                    />
                    <button
                        type="submit"
                        className="text-white font-secondary bg-gradient-to-r from-[#FF9E00] to-[#995F00] px-8 py-4 rounded-lg transition-all duration-700 hover:opacity-90 hover:scale-[1.1] mb-20"
                    >
                        Enviar
                    </button>
                </form>
            </div>
        </section>
    );
}
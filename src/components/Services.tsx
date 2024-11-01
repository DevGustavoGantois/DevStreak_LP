import { serviceData } from '../../data/index'

export function Services() {
    return (
        <section className="flex justify-center items-center mt-20 mb-24" id="Diferenciais">
            <div className="w-full max-w-4xl">
                <h1 className="text-gradient text-center font-primary text-3xl mt-20 lg:text-5xl" data-aos="fade-up">Diferenciais do DevStreak</h1>
                <div className="mb-2 mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {serviceData.map((item, index) => {
                        return (
                            <div className="p-8 bg-[#ff9d007c] border border-white/80 rounded-xl" key={index} data-aos="fade-up-right" data-aos-delay="200">
                                <h1 className="text-gradient-white font-primary text-2xl">{item.title}</h1>
                                <p className="mt-2 text-white/80">{item.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
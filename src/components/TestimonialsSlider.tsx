import { testimonialsData } from "../../data";


export function TestimonialsSlider() {
    return (
        <section>
            <div className="flex flex-col lg:flex-row justify-center gap-6" data-aos="fade-down">
                {testimonialsData.testimonials.map((item, index) => {
                    return (
                        <div key={index} className="p-4 lg:p-16 bg-gradient-to-t from-[#0d0d0d] to-[#000] rounded-lg shadow-lg flex-1">
                            <p className="text-gray-300 mb-8">{item.testimonial}</p>
                            <div className="text-white font-bold text-xl">
                                <p>{item.people}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
import { testimonialsData } from "../../data/index";
import { TestimonialsSlider } from "./TestimonialsSlider";


export function Testimonials() {
    return (
        <section className="flex flex-col items-center py-10 mt-40" id="Depoimentos">
            <div className="text-center">
                <h1 className="text-gradient font-bold text-5xl" data-aos="fade-up">{testimonialsData.title}</h1>
                <p className="text-white mt-2" data-aos="fade-up" data-aos-delay="200">{testimonialsData.description}</p>
            </div>
            <div className="mt-20">
                <TestimonialsSlider />
            </div>
        </section>
    );
}
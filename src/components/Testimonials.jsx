import { testimonials } from "../constants"

const Testimonials = () => {
    return (
        <section id="testimonials" className="py-16 overflow-visible max-h-none">
            <h1 className="mb-14 text-5xl md:text-7xl text-center">What People are saying</h1>

            <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
                {testimonials.map(item => (
                    <Testimonial key={item.user} img={item.image} paragraph={item.text} company={item.company} name={item.user}  />
                ))}
            </div>

        </section>
    )
}

const Testimonial = ({ paragraph, img, name, company }) => {
    return (
        <div className="bg-[#171717] border mb-6 border-neutral-700 p-6 rounded-lg font-light break-inside-avoid shadow-lg">
            <p className="text-neutral-400">{paragraph}</p>
            <div className="flex mt-6">
                <img src={img} alt="user-email" className="rounded-full w-12 h-12 mr-6" />
                <div>
                    <span>{name}</span>
                    <br />
                    <span className="text-neutral-400 italic text-sm">{company}</span>
                </div>
            </div>
        </div>
    )
}


export default Testimonials
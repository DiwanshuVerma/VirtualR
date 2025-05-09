import { CheckCircle2 } from "lucide-react"
import { pricingOptions } from "../constants"

const Pricing = () => {
    return (
        <section id="pricing" className="py-8">
            <h1 className="text-5xl md:text-7xl text-center mb-12">Pricing</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center max-w-6xl mx-auto p-4">
                {pricingOptions.map(option => (
                    <div
                        className="p-8 border w-full max-w-[400px] border-neutral-700 rounded-lg"
                        key={option.price}
                    >
                        <h1 className="mb-5 ml-1 text-2xl md:text-3xl">
                            {option.title}
                            {option.title === 'Pro' && (
                                <span className="text-xl bg-gradient-to-r from-green-500 to-emerald-700 text-transparent bg-clip-text">
                                    {' '}
                                    (Most Popular)
                                </span>
                            )}
                        </h1>
                        <h2 className="mb-8 ml-1 text-3xl md:text-4xl">
                            {option.price}{' '}
                            <span className="text-lg text-neutral-500">/Month</span>
                        </h2>

                        <ul className="space-y-4">
                            {option.features.map((feature, index) => (
                                <li className="flex items-center justify-start gap-2" key={index}>
                                    <div className="text-green-400 bg-neutral-900 h-10 w-10 p-2 rounded-full">
                                        <CheckCircle2 />
                                    </div>
                                    <span className="text-lg">{feature}</span>
                                </li>
                            ))}
                        </ul>

                        <button className="text-xl w-full cursor-pointer border border-green-900 mt-10 rounded-lg p-2 hover:bg-green-900">
                            Subscribe
                        </button>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Pricing
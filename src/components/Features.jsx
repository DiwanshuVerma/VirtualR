import { features } from "../constants";

const Features = () => {
    return (
        <section id="features" className="pb-16 sm:pb-28 pt-2 sm:pt-12 flex flex-col gap-10 sm:gap-16 text-center items-center px-0 sm:px-8">
            <h1 className="text-xl font-700 text-green-700 bg-neutral-900 w-fit py-1 px-2 rounded-full">FEATURES</h1>
            <h1 className="text-5xl md:text-7xl font-600">Easily build <span className="bg-gradient-to-r from-green-500 to-green-800 text-transparent bg-clip-text"> your code</span></h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                {features.map(feature => (
                    <div key={feature.text} className="flex gap-5 text-left">
                        <div className="bg-neutral-900 h-fit p-2 rounded-full text-green-500">
                            {feature.icon}
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-xl font-medium">{feature.text}</h2>
                            <p className="text-neutral-500 text-[16px]">{feature.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Features;
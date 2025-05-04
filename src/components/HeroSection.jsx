import ButtonGradient from "./ButtonGradient"
import ButtonTrans from "./ButtonTrans"
import videoVR from '../assets/video2.mp4'
import videoHACKING from '../assets/video1.mp4'

const HeroSection = () => {
    return (
        <section id="#" className="py-20 flex flex-col items-center gap-16 sm:gap-20">
            <div className="flex flex-col justify-center text-center gap-8 mt-12 md:mt-16">
                <h1 className="text-4xl sm:text-5xl md:text-7xl">VirtualR build tools <span className="text-green-500"> for </span> <br />  <span className="bg-gradient-to-r text-transparent bg-clip-text from-green-500 to-green-900">developers</span></h1>

                <p className="text-[15px] sm:text-[18px] max-w-3xl lg:max-w-4xl text-neutral-400">Empower your creativity and bring your VR app ideas to life with our intuitive development tools. Get started today and turn your imagination into immersive reality!</p>

                <div className="space-x-3 space-y-2">
                    <ButtonGradient label='Start for FREE' />
                    <ButtonTrans label='Documentation' />
                </div>
            </div>

            <div className="flex justify-center">
                <video autoPlay loop muted className="w-1/2 mx-2 rounded-lg border-1 border-green-700">
                    <source src={videoVR} type="video/mp4" />
                </video>
                <video autoPlay loop muted className="w-1/2 mx-2 rounded-lg border-1 border-green-700">
                    <source src={videoHACKING} type="video/mp4"/>
                </video>
            </div>
        </section>
    )
}

export default HeroSection
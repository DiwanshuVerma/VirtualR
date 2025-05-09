import code from '../assets/code.jpg'
import { checklistItems } from '../constants'
import { CheckCircle2 } from "lucide-react";

const Workflow = () => {
    return (
        <section id='workflow' className="py-16 text-center border-t border-neutral-800">
            <h1 className="text-5xl md:text-7xl font-medium">Accelerate your <span className="bg-gradient-to-r from-green-500 to-green-900 text-transparent bg-clip-text"> coding workflow.</span></h1>

            <div className='flex flex-col lg:flex-row justify-center items-stretch mt-16 w-full'>
                <div className='w-2/3 lg:w-1/2 mx-auto'>
                    <img src={code} alt="code" className='w-full h-auto' />
                </div>

                <div className='w-full sm:w-2/3 lg:w-1/2 flex flex-col justify-between py-6 gap-6 sm:gap-4'>
                    {checklistItems.map((item, index) => (
                        <div key={index} className='flex gap-0 sm:gap-4'>
                            <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
                                <CheckCircle2 />
                            </div>

                            <div className='space-y-4 text-left'>
                                <h4 className='text-xl'>{item.title}</h4>
                                <p className='text-[16px] text-neutral-500'>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Workflow




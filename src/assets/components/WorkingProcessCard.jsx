import { useState } from 'react'



export function WorkingProcessCard({ id, title, text }) {
    const [isOpen, setIsOpen] = useState(false);
    return (

        <div className={`${isOpen ? 'bg-green' : 'bg-accent'} text-background lg:py-15 lg:px-15 py-5 px-5  rounded-[45px] border border-solid animate-fadeIn border-dark shadow-[0_5px_0_0_#000000] `}>
            <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer flex justify-between items-center">
                <div className=" flex flex-nowrap gap-4 items-center">
                    <div className="font-space lg:text-6xl text-4xl text-primary font-medium">{id}</div>
                    <div className="font-space lg:text-3xl  text-2xl text-primary font-medium">{title}</div>
                </div>
                <div className="w-[58px] h-[58px] rounded-full border border-primary flex items-center justify-center font-space text-3xl text-primary font-medium flex-none">{isOpen ? '−' : '+'}</div>
            </div>
            {isOpen && (
                <div className="mt-8 pt-8 border-t border-black transition-all duration-300 animate-fadeIn ">
                    <p className="text-lg text-black ">
                        {text}
                    </p>
                </div>
            )}
        </div>
    )

}

export default WorkingProcessCard;
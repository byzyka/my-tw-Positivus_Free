



export function TMSlide({ id, name, text, post }) {
    return (
        <div key={id} className=" md:w-[606px] mb-[124px] mob:w-full">
            <div className="md:h-[335px] mob:h-full flex flex-col justify-between mob:px-2">
                <div className="font-space text-lg relative inline-block mb-[17px] md:py-[48px] md:px-[52px] mob:py-[10px] mob:px-[10px]   border border-solid border-green md:rounded-[45px] mob:rounded-[10px] bg-dark text-white text-lg 
                speechBubble 
                ">
                    {text}


                </div>
                <div className="pl-[88px] mt-5">
                    <p className="text-green text-xl font-space"> {name}</p>
                    <p className="font-space text-lg text-white">{post}</p>
                </div>
            </div>
        </div>
    );
}

export default TMSlide;
import Linkedin from "../components/Linkedin.jsx";


export function TeamItem({ name, post, img, experience }) {
    return (

        <div className="py-10 px-[35px] mob:py-5 mob:px-5 rounded-[45px] border border-solid border-dark shadow-[0_5px_0_0_#000000]">
            <div className="border-b border-primary pb-7 ">
                <div className="relative flex gap-5 mob:gap-2 items-end">
                    <div className="relative w-[100px] h-[100px]">


                        <div
                            className="absolute top-1 left-1 w-full h-full bg-primary"
                            style={{
                                clipPath: 'path("M83.8 49c32.8 37.3 2.5 67.6-34.9 34.8C11.5 116.6-18.8 86.3 14 49-18.8 11.5 11.5-18.8 49 14c37.3-32.8 67.6-2.5 34.8 35")'
                            }}
                        />
                        <div
                            className="absolute top-0 left-0 w-full h-full bg-green"
                            style={{
                                clipPath: 'path("M83.8 49c32.8 37.3 2.5 67.6-34.9 34.8C11.5 116.6-18.8 86.3 14 49-18.8 11.5 11.5-18.8 49 14c37.3-32.8 67.6-2.5 34.8 35")'
                            }}
                        >
                            <img
                                src={img}
                                alt={name}
                                className="w-full h-full object-cover mix-blend-multiply"
                            />
                        </div>

                    </div>
                    <div className="">
                        <p className='sm:text-xl mob:text-[16px] font-medium'>{name}</p>
                        <p className='sm:text-lg mob:text-[14px]  font-space'>{post}</p>
                    </div>
                        <Linkedin className="absolute right-0 top-0 " size={34} hoverBg="#898989" colorBg="#000" color="#B9FF66"/>
                    
                </div>
            

            </div>
            <div className="pt-7">
                {experience}
            </div>

        </div>


    )


}
export default TeamItem;
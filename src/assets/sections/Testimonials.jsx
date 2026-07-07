import CustomSwiper from "../components/swiper/CustomSwiper";

export function Testimonials() {
    return (
    <section className="flex items-center pt-[120px] flex-col ">
              <div className="my-container py-5 flex flex-wrap lg:flex-nowrap gap-10  ">
                   <h2 className="text-[40px] mark font-medium">Testimonials</h2>
                   <p className="text-lg max-w-[580px] ">Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services</p>
               </div>
               <div className="my-container overflow-hidden">
                   < div className = "mt-15  sm:py-17.5 py-5  bg-dark md:rounded-[45px] mob:rounded-[10px]" >
                <CustomSwiper/>
               </div>
               </div>
               
               
           </section>
    )
}
export default Testimonials
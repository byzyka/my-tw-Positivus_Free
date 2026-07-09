
import ContactForm from "../components/ContactForm"
import bgImg from "../img/bg-abstraction.svg"


export function Contact() {
  return (
    <section className="flex items-center pt-[120px] flex-col ">
      <div className="my-container ">
        <div className=" py-5 flex flex-wrap lg:flex-nowrap gap-10  ">
          <h2 className="text-[40px] mark font-medium">Contact Us</h2>
          <p className="text-lg max-w-[323px] ">Connect with Us: Let's Discuss Your Digital Marketing Needs</p>
        </div>
        <div className="mt-15 relative grid md:grid-cols-2  bg-accent w-full py-15 pl-25 md:rounded-[45px] mob:rounded-[10px] ">
          <ContactForm />
          <div
            style={{ backgroundImage: `url(${bgImg})`, backgroundPosition: '13rem' }}
            className="w-full h-full max-w-[691px] max-h-[648px] bg-no-repeat    ">

          </div>
        </div>

      </div>

    </section>
  )
}


export default Contact
import Button from "../components/Button.jsx"
import HappenImg from "../img/happen.svg"

export function Happen() {
    return (
        <section className="pt-25">
            <div className="my-container">
                <div className="grid lg:grid-cols-2   sm:py-15 sm:px-15 px-5 py-5 gap-[186px] bg-[#F3F3F3] rounded-[45px] relative my-6">
                    <div className=" space-y-6.5">
                        <h3 className="text-3xl font-medium">Let’s make things happen</h3>
                        <p className="text-lg">Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.</p>
                        <Button className="bg-dark text-background text-xl">Get your free proposal</Button>
                    </div>
                    <div className="hidden lg:block absolute max-w-[494]   top-[-25px] lg:right-[135px] sm:right-0">
                        <img src={HappenImg}
                            alt="abstraction"
                            className="" />

                    </div>
                </div>
            </div>


        </section>


    )

};

export default Happen
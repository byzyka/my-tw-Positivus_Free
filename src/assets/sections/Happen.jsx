import Button from "../components/Button.jsx"
import HappenImg from "../img/happen.svg"

export function Happen() {
    return (
        <section className="pt-15 pt-25">
            <div className="grid grid-cols-2 my-container  px-15 gap-[186px] bg-[#F3F3F3] rounded-[45px] relative my-6">
                <div className="py-15 space-y-6.5">
                    <h3 className="text-3xl font-medium">Let’s make things happen</h3>
                    <p className="text-lg">Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.</p>
                    <Button className="bg-dark text-background text-xl">Get your free proposal</Button>
                </div>
                <div className="absolute max-w-[494]   top-[-25px] right-[135px]">
                    <img src={HappenImg}
                        alt="abstraction"
                        className="" />

                </div>
            </div>
        </section>
        

    )

};

export default Happen
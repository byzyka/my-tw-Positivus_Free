import CardServicesWrap from "../components/CardServicesWrap.jsx"
import LearnMoreBtn from "../components/LearnMore.jsx";
import Card1 from '../img/imgcards/card1.svg';
import Card2 from '../img/imgcards/card2.svg';
import Card3 from '../img/imgcards/card3.svg';
import Card4 from '../img/imgcards/card4.svg';
import Card5 from '../img/imgcards/card5.svg';
import Card6 from '../img/imgcards/card6.svg';

const Services = () => {
    return (
        <section className="flex items-center pt-[120px] flex-col ">
            <div className="my-container py-5 flex flex-nowrap gap-10  ">
                <h2 className="text-[40px] mark font-medium">Services</h2>
                <p className="text-[18px] max-w-[580px]">At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:</p>
            </div>
            {/* cards */}
            <div className="my-container pt-15  grid lg:grid-cols-2 gap-10 justify-between ">
                <CardServicesWrap>
                    <div className="flex flex-col justify-between">
                        <h3 className="pb-2.5 text-3xl font-medium" > <span className="mark">Search engine</span>  <br></br> <span className="mark">optimization</span></h3>

                        <LearnMoreBtn isDark={false}>  
                        </LearnMoreBtn>

                    </div>
                    <div className="flex items-center">
                        <img
                            src={Card1}
                            alt="abstraction"
                            className="w-full max-w-[210px] h-full max-h-[170px] object-contain "
                        />
                    </div>

                </CardServicesWrap>

               <CardServicesWrap bgColor="green">
                    <div className="flex flex-col gap-2.5 justify-between">
                        <h3 className="pb-2.5 text-3xl font-medium" > <span className="mark mark-accent">Pay-per-click</span>  <br></br> <span className="mark mark-accent">advertising</span></h3>

                        <LearnMoreBtn isDark={false}>  
                        </LearnMoreBtn>

                    </div>
                    <div className="flex items-center">
                        <img
                            src={Card2}
                            alt="abstraction"
                            className="w-full max-w-[210px] h-full max-h-[170px] object-contain "
                        />
                    </div>

                </CardServicesWrap>
                <CardServicesWrap bgColor="dark">
                    <div className="flex flex-col justify-between">
                        <h3 className="pb-2.5 text-3xl font-medium" > <span className="mark mark-accent">Social Media</span>  <br></br> <span className="mark mark-accent">Marketing</span></h3>

                        <LearnMoreBtn isDark={true} >  
                        </LearnMoreBtn>

                    </div>
                    <div className="flex items-center">
                        <img
                            src={Card3}
                            alt="abstraction"
                            className="w-full max-w-[210px] h-full max-h-[170px] object-contain "
                        />
                    </div>

                </CardServicesWrap>

                <CardServicesWrap>
                    <div className="flex flex-col justify-between">
                        <h3 className="pb-2.5 text-3xl font-medium" > <span className="mark">Email</span>  <br></br> <span className="mark">Marketing</span></h3>

                        <LearnMoreBtn isDark={false}>  
                        </LearnMoreBtn>

                    </div>
                    <div className="flex items-center">
                        <img
                            src={Card4}
                            alt="abstraction"
                            className="w-full max-w-[210px] h-full max-h-[170px] object-contain "
                        />
                    </div>

                </CardServicesWrap>

               <CardServicesWrap bgColor="green">
                    <div className="flex flex-col gap-2.5 justify-between">
                        <h3 className="pb-2.5 text-3xl font-medium" > <span className="mark mark-accent">Content</span>  <br></br> <span className="mark mark-accent">Creation</span></h3>

                        <LearnMoreBtn isDark={false}>  
                        </LearnMoreBtn>

                    </div>
                    <div className="flex items-center">
                        <img
                            src={Card5}
                            alt="abstraction"
                            className="w-full max-w-[210px] h-full max-h-[170px] object-contain "
                        />
                    </div>

                </CardServicesWrap>
                <CardServicesWrap bgColor="dark">
                    <div className="flex flex-col justify-between">
                        <h3 className="pb-2.5 text-3xl font-medium" > <span className="mark ">Analytics and </span>  <br></br> <span className="mark ">Tracking</span></h3>

                        <LearnMoreBtn isDark={true} >  
                        </LearnMoreBtn>

                    </div>
                    <div className="flex items-center">
                        <img
                            src={Card6}
                            alt="abstraction"
                            className="w-full max-w-[210px] h-full max-h-[170px] object-contain "
                        />
                    </div>

                </CardServicesWrap>
            </div>

        </section>
    )
}


export default Services;
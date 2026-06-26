import Button from "../components/Button.jsx"
import BannerDeclarat from "../img/bannerDecl.svg"

const Declaration = () => {
    return (
        <section className=" flex items-center">
            <div className="my-container py-1.5 pt-15  grid lg:grid-cols-2 items-center">
              {/* left */}
                <div className="space-y-[35px] pr-[108.5px]">
                     <h1 className="lg:text-6xl text-[43px] text-primary animate-fade-in animation-delay-200 font-medium">Navigating the digital landscape for success</h1>
                     <p className="text-xl animate-fade-in animation-delay-400">Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</p>
                     <Button className="bg-dark text-background animate-fade-in animation-delay-600">Book a consultation</Button>
                                    
                </div>
                {/* right */}
                <div>
<img 
        src={BannerDeclarat} 
        alt="megaphone" 
        className="w-full h-full object-cover "
      />
                </div>
                

            </div>
           
        </section>
    )
}
export default Declaration
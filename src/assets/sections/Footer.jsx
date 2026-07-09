import LogoIcon from "../components/Logo.jsx";
import MenuNav from "../components/Menu.jsx";
import Twitter from "../components/Twitter.jsx";
import Linkedin from "../components/Linkedin.jsx";
import Facebook from '../components/Facebook.jsx'
import FormSubscribe from "../components/FormSubscribe.jsx";

export function Footer() {
    return (
        <footer className="mt-[120px]">
            <div className="my-container mx-auto bg-dark  md:rounded-[45px] rounded-b-lg ">
                <div className="md:px-15 md:py-14 mob:px-0 mob:py-5 ">
                    <div className="flex items-center justify-between">
                        <a href="#" className="flex items-center justify-between hover:scale-110 text-white">
                            <LogoIcon color="#ffffff" />
                        </a>
                        <MenuNav className="text-white" />
                        <div className="hidden sm:flex items-center flex-nowrap gap-5">
                            <Linkedin hoverBg="#B9FF66" />
                            <Facebook />
                            <Twitter hoverBg="#B9FF66"/>
                        </div>
                    </div>
                    <div className="grid xl:grid-cols-[1fr_2fr] xl:gap-[154px] gap-5 justify-between items-center mt-16.5 ">
                        <div className="font-space space-y-7 max-w-[332px]">
                            <h4 className="mark text-xl font-medium inline-block">Contact us:</h4>
                            <div className="text-white text-lg space-y-5">
                            <p>Email: info@positivus.com</p>
                            <p>Phone: 555-567-8901</p>
                            <p>Address: 1234 Main St Moonstone City, Stardust State 12345</p> 
                            </div>
                            
                        </div>
                        <div className="">
                            <FormSubscribe />
                        </div>
                        
                    </div>
                    <div className=" h-[1px] w-full bg-white my-12.5 "></div>
                    <div className="text-white text-lg flex flex-nowrap gap-10 ">
                    <p>© 2023 Positivus. All Rights Reserved.</p>
                    <a href="">Privacy Policy</a>
                    </div>

                </div>


            </div>

        </footer>
    )
}
export default Footer;
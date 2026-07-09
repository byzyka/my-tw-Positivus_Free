import LogoIcon from "../components/Logo.jsx"
import MenuNav from "../components/Menu.jsx"
import Button from "../components/Button.jsx"


export function Navbar() {
    return (

        <header className="my-container py-1.5 flex items-center justify-between pt-15 ">

            <a href="#" className="flex items-center justify-between hover:scale-110">
                <LogoIcon  />
            </a>
            <div>
                <MenuNav />
            </div>
            <div>
                <Button className="mob:py-2 mob:px-2 text-xl sm:px-8.5 sm:py-5 sm:text-xl" > Request a quote</Button>
            </div>

        </header>
    )



}
export default Navbar
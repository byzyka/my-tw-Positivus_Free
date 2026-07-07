  
//    export function MenuNav() {
//     return (
//         <div className="flex items-center gap-10 py-5 text-xl leading-7">
//            <a href="#"> Services</a>
//            <a href="#">Use Cases</a>
//            <a href="#">About us</a>
//            <a href="#">Pricing</a>
//            <a href="#">Blog</a>
//         </div>
        
//     )


    
// }

const navLinks = [  
    { href: "#services", label: "Services" },
    { href: "#useCases", label: "Use Cases" },
    { href: "#about", label: "About us" },
    { href: "#pricing", label: "Pricing" },
    { href: "#blog", label: "Blog" },
    
];

export function MenuNav() {
    return <nav className="hidden lg:flex items-center gap-5  ">
        {navLinks.map((link, index)=> (<a key={link.href} className="p-5 text-xl leading-7 text-primary rounded-[0.875rem] hover:bg-dark hover:text-green" href={link.href}>{link.label}</a>))}
    </nav>

}

export default MenuNav;
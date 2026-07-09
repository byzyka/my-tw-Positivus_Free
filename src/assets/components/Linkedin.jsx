
export function Linkedin({ colorBg = "#fff", hoverBg ='#fff',  size = 30, color = '#000', className = '' }) {
    return (

        <a href=""  className="group transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 30 30"
            width={size} 
            height={size}
            fill="none" className={className}>
                <circle className="transition-colors duration-300 group-hover:fill-[var(--hover-bg)]"  style={{ '--hover-bg': hoverBg }}  cx="15" cy="15" r="15" fill={colorBg} /><path fill={color} d="M8.2 22h3.1V12h-3zM8 8.9q0 1.7 1.8 1.8 1.6-.2 1.7-1.8-.2-1.6-1.7-1.8-1.7.2-1.9 1.8M19.8 22H23v-5.4c0-2.7-.6-4.8-3.7-4.8q-2.2.2-3 1.6v-1.3h-3v10h3.2v-5c0-1.3.2-2.5 1.8-2.5s1.6 1.5 1.6 2.6z" /></svg>
        </a>

    )


}
export default Linkedin
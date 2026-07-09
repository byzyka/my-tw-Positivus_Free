export function Facebook({ colorBg = "#fff", className = '' }) {
    return (
   <a href=""  className="group transition-all duration-300">
             <svg xmlns="http://www.w3.org/2000/svg"
                width="30" height="30" fill="none"
                className={className}>
                <path className="transition-colors duration-300 group-hover:fill-[#b9ff66]" fill={colorBg} d="M30 15A15 15 0 0 0 15 0 15 15 0 0 0 0 15a15 15 0 0 0 12.6 15V19.5H8.8V15h3.8v-3.3C12.6 8 15 6 18.3 6c1.7 0 3.4.3 3.4.3V10h-2c-1.8 0-2.4 1.2-2.4 2.4V15h4.2l-.7 4.4h-3.5V30A15 15 0 0 0 30 15" /></svg>
       </a>

    )


}
export default Facebook
  
   export function Twitter({colorBg ="#fff", color = '#000', className = '' }) {
    return (
    
       <a href="#" className="group transition-all duration-300">
         <svg xmlns="http://www.w3.org/2000/svg" className={""} width="30" height="30" fill="none">
         <circle cx="15" cy="15" r="15" fill={colorBg}
         className="transition-colors duration-300 group-hover:fill-[#b9ff66]" 
         />
         <path className="" fill={color} d="M22 11.5q1-.7 1.8-1.9-1 .5-2 .6 1-.8 1.5-2-1 .6-2.3.9a3.6 3.6 0 0 0-6.2 3.3q-4.6-.4-7.4-3.8-.5.8-.5 1.8 0 2 1.6 3-1 0-1.6-.4.2 2.8 2.9 3.6l-1 .1h-.7a4 4 0 0 0 3.4 2.4A7 7 0 0 1 7 20.7h-.8a10 10 0 0 0 5.5 1.5C18.4 22.2 22 16.8 22 12z"/></svg>
       </a>
        
    )

    
}
export default Twitter;
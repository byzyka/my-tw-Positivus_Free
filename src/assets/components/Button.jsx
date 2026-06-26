//  export function ButtonRequest() {
//     return (
//         <button className="flex px-8.5 py-5 border border-dark border-solid backdrop-blur rounded-[0.875rem] hover:bg-dark hover:text-green  text-xl leading-7">
//             Request a quote
//         </button>
        
//     )

// }

const Button = (
    {
        className = '',
        size = 'default',
        children,
        ...props
    }
) => {
    const baseClasses ='flex  text-xl leading-7 border border-dark border-solid backdrop-blur rounded-[0.875rem] hover:bg-dark hover:text-green focus:outline-none ';

    const sizeClasses = {
        sm: '',
        default: 'px-8.5 py-5 text-xl',
        lg: ''

    }
    return <button className={`${baseClasses} ${sizeClasses[size]} ${className}`}>{children}</button>
}
export default Button;
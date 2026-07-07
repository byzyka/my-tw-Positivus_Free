
const CardServicesWrap = (
    {
        className = '',
        size = 'default',
        children,
        bgColor = 'accent',
        ...props
    }

) => {
    const cardClasses = 'group rounded-[45px] border border-solid border-dark grid sm:grid-cols-2 gap-[77px]  min-h-[310px] max-w-[608px] w-full shadow-[0_5px_0_0_#000000]';

    const sizeCard = {
        sm: '',
        default: 'w-[608px] py-[50px] px-[50px]',
        lg: ''

    }
    const bgColors = {
        green: 'bg-green',
        accent: 'bg-accent',
        dark: 'bg-dark'
    }

    return (


        <div className={`${cardClasses} ${sizeCard[size]} ${bgColors[bgColor]} ${className}`}>
            {children}
        </div>

    )
}

export default CardServicesWrap
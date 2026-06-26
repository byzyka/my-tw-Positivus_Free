
const LearnThemes = {
    lightCard: {
        circle: 'bg-dark group-hover:bg-accent',
        arrow: 'fill-[#b9ff66] group-hover:fill-dark',
        text: 'text-dark',

    },
    // Вариант для темной карточки (белый круг, черная стрелка)
    darkCard: {
        circle: 'bg-white group-hover:bg-green',
        arrow: 'fill-dark group-hover:fill-dark' ,// на акцентном фоне (зеленом) стрелка останется темной
        text: 'text-background',
    }
};

export function LearnMoreBtn({ isDark = false, href = "#", label = "Learn more" }) {
    const theme = isDark ? LearnThemes.darkCard : LearnThemes.lightCard;

    return (
        <a href={href} className="group flex flex-nowrap items-center gap-3.5 text-xl">
            <div className={`flex items-center justify-center w-10 h-10 rounded-full transition-colors duration-300 ${theme.circle}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" fill="none"><path className={`transition-colors duration-300 ${theme.arrow}`} d="M.8 13.7a1.5 1.5 0 1 0 1.5 2.6zm19.5-8.3q.2-1.3-1-1.9L6.1.1a1.5 1.5 0 1 0-.8 2.8L17 6.1l-3.1 11.5a1.5 1.5 0 1 0 2.9.8zm-18 10.9 17.3-10L18 3.7.8 13.7z" /></svg>
            </div>
            <span className={isDark ? 'text-white' : 'text-black'}>
        {label}
      </span>
        </a>
    )
}

export default LearnMoreBtn;

const Checkbox = (
{label, checked, onChange}
    // { label,
    //     checked,
    //     onChange,
    //     name,
    //     value,
    //     disabled = false }
) => {
//  const [isChecked, setIsChecked] = useState(false); // Состояние

    return (
        <label className="flex items-center gap-3.5 cursor-pointer group ">
            {/* 1. Скрываем стандартный чекбокс */}
            <input
                // type="checkbox"
                // checked={checked}
                // onChange={onChange}
                // name={name}
                // value={value}
                // disabled={disabled}
                // className="hidden" // Полностью скрываем
                 type="checkbox" 
        className="hidden"
        checked={checked} // Используем пропс
        onChange={onChange} 
        // checked={isChecked}
        // onChange={() => setIsChecked(!isChecked)}

            />

            {/* 2. Создаем кастомный чекбокс */}
            <div className={`
                w-7 h-7 
                rounded-full 
                border 
                flex items-center justify-center
                transition-all duration-200 
                ${checked
                            ? 'bg-white border' // Активный
                            : 'bg-white border group-hover:border-green' // Неактивный
                        }
            `}>
                {/* 3. Внутренняя точка (когда выбран) */}
                {checked && (
                    <div className="w-4 h-4 bg-green rounded-full" />
                )}
            </div>

            {/* 4. Текст рядом с чекбоксом */}
            {label && (
                <div className={`
          select-none
          ${checked ? 'font-medium ' : ''}
        `}>
                    {label}
                </div>
            )}
        </label>
    )
}

export default Checkbox
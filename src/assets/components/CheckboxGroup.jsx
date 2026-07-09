import Checkbox from './Checkbox';

const CheckboxGroup = ({ 
  options, 
  value, 
  onChange, 
  name 
}) => {
  return (
    <div className="grid grid-cols-2 max-w-[276px] ">
     
      
      {/* Список чекбоксов */}
      
        {options.map((option) => (
          <Checkbox
            key={option.value}
            label={option.label}
            name={name}
            value={option.value}
            checked={value === option.value} // Для одиночного выбора
            onChange={(e) => {
              // Если чекбокс выбран, передаем его значение
              if (e.target.checked) {
                onChange(option.value);
              } else {
                onChange(null); // Если отменили выбор
              }
            }}
          />
        ))}
      
    </div>
  );
};

export default CheckboxGroup;
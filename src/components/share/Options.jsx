import { twMerge } from 'tailwind-merge';

const Options = ({ options, className, optionValue, setOptionValue }) => {

  const handleChange = (e) => {
    const selectedValue = e.target.value;
    setOptionValue(selectedValue)
  };

  return (
    <div className={twMerge("relative inline-block", className)}>
      <select
        className={twMerge(
          "block w-full bg-white border border-gray-300 hover:border-gray-400 px-4 py-2 pr-8 rounded-md leading-tight focus:outline-none ",
          className
        )}
        value={optionValue}
        onChange={handleChange}
      // {...register(name)}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

    </div>
  );
};

export default Options;

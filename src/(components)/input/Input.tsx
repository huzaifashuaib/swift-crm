import { InputProps } from "@/types/types";

const Input = ({
  value,
  onChange,
  disable,
  type,
  label,
  placeholder,
  name,
}: InputProps) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-gray-700 font-medium mb-2">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value || ""}
        disabled={disable}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
      />
    </div>
  );
};

export default Input;

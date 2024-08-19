import { InputProps } from "@/types/types";

const Input = ({ value, onchange, disable, type, label,placeholder }: InputProps) => {
  return (
    <>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
          {label}
        </label>
        <input
          type={type}
          id=""
          value={value}
          disabled={disable}
          onChange={onchange}
          placeholder={placeholder}
          className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>
    </>
  );
};

export default Input;

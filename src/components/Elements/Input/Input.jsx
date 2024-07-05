import { forwardRef } from "react";

const Input = forwardRef((props, ref) => {
  const { type, placeholder, name} = props;
  return (
    <input
      type={type}
      className="font-inter text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-50 border-gray-300 placeholder:opacity-50"
      placeholder={placeholder}
      autoComplete="off"
      name={name}
      id={name}
      ref={ref}
    />
  );
})

export default Input;

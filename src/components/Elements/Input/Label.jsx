const Label = (props) => {
  const { htmlFor, children } = props
  return (
    <label
      htmlFor={htmlFor}
      className="font-inter block mb-2 text-sm font-medium text-slate-500"
    >
      {children}
    </label>
  );
};

export default Label;

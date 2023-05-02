const Input = ({ label, name, formik, type = "text" }) => {
  return (
    <div className="w-full mb-2">
      <label
        htmlFor={name}
        className="my-2 mr-1 inline-block text-slate-600 font-bold"
      >
        {label}
      </label>
      <input
        id={name}
        type={type}
        {...formik.getFieldProps(name)}
        name={name}
        placeholder={label}
        className="outline-none w-full bg-gray-300/50 px-3 py-4 trsition-all duration-200 rounded-xl text-slate-600 hover:bg-white hover:ring-1 hover:ring-blue-400/50 hover:shadow-lg hover:shadow-blue-300/50 focus:bg-white focus:ring-1 focus:ring-blue-400/50 focus:shadow-lg focus:shadow-blue-300/50"
      />
      {formik.errors[name] && formik.touched[name] && (
        <div className="text-red-400 text-sm mr-1 mt-2">{formik.errors[name]}</div>
      )}
    </div>
  );
};

export default Input;
const TextArea = ({ formik, name }) => {
  return (
    <div className="w-full">
      <textarea
        name={name}
        cols="30"
        rows="10"
        className="w-full border-2 border-gray-300 
            resize-none placeholder:text-slate-400 rounded-2xl p-3 text-slate-700 outline-none focus:border-blue-500"
        placeholder="نظر خود را وارد کنید"
        {...formik.getFieldProps({ name })}
      ></textarea>
      {formik.errors[name] && formik.touched[name] ? (
        <div className="text-red-500 ">{formik.errors[name]}</div>
      ) : (
        ""
      )}
    </div>
  );
};

export default TextArea;
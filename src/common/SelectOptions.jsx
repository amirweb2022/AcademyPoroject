import Select from "react-select";
const SelectOptions = ({ name, formik, options }) => {
  return (
    <div className="w-full">
      <Select
        onChange={(option) => formik.setFieldValue("score", option?.value)}
        onBlur={formik.handleBlur}
        value={options.find(
          (option) => option.value === formik.values.score
        )}
        options={options}
        name={name}
      />
      {formik.errors[name] && formik.touched[name] ? (
        <div className="text-red-500">{formik.errors[name]}</div>
      ) : (
        ""
      )}
    </div>
  );
};

export default SelectOptions;
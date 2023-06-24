import Select from "react-select";
const SelectComponent = ({ ...rest }) => {
  return (
    <div className="w-full">
      <Select {...rest} className="w-full" />
    </div>
  );
};

export default SelectComponent;
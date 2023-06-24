import SelectComponent from "../../common/SelectComponent";
const optionsType = [
  { value: "Not completed", label: "درحال برگزاری" },
  { value: "completed", label: "تکمیل ظبط شده ها" },
  { value: "free", label: "رایگان" },
  { value: "money", label: "نقدی" },
];
const optionsSort = [
  { value: "popular", label: "محبوب ترین" },
  { value: "theNewest", label: "جدیدترین" },
  { value: "TheOldest", label: "قدیمی ترین" },
];
const Filter = ({
  onChangeType,
  onChangeSort,
  selectedOptionType,
  selectedOptionSort,
  onSearchHandler,
  searchedValue,
}) => {
  return (
    <div className="p-3 flex justify-center items-center flex-col md:flex-row gap-y-3 gap-x-3">
      <SelectComponent
        options={optionsType}
        onChange={onChangeType}
        value={selectedOptionType}
        placeholder="نوع دوره"
      />
      <SelectComponent
        placeholder="مرتب سازی"
        options={optionsSort}
        onChange={onChangeSort}
        value={selectedOptionSort}
      />
      <div className="w-full">
        <input
          type="text"
          className="w-full outline-none border-blue-300 p-2 rounded-md text-slate-600 border-[1px] focus:border-blue-700 placeholder:text-slate-500"
          placeholder="جستجو کردن"
          onChange={onSearchHandler}
          value={searchedValue}
        />
      </div>
    </div>
  );
};

export default Filter;
import "./coursesHeader.css";
const CoursesHeader = ({ children , title }) => {
  return (
    <div className="w-full flex justify-between items-center px-4 mt-3">
      <div className="px-2">
        <span className="font-bold text-lg text-slate-700 relative title md:text-xl">
          {title}
        </span>
      </div>
      {children}
    </div>
  );
};

export default CoursesHeader;
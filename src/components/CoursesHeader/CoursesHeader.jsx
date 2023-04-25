import "./coursesHeader.css";
const CoursesHeader = ({ children , title }) => {
  return (
    <div className="w-full flex justify-between items-center px-4 mt-16">
      <div className="px-2">
        <span className="font-bold text-xl text-slate-700 relative title">
          {title}
        </span>
      </div>
      {children}
    </div>
  );
};

export default CoursesHeader;
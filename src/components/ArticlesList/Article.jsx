import { Link } from "react-router-dom";

const Article = ({ article }) => {
  return (
    <div className="w-full mb-3 md:mb-4 ml-2 md:w-1/2 lg:w-1/3 h-full p-2 bg-white flex justify-center items-center flex-col rounded-2xl my-4 shadow-lg">
      <Link to={`/singleArticle/${article.shortName}`} className="w-full">
        <div className="w-full h-full flex justify-center items-center rounded-2xl overflow-hidden">
          <img
            src={`http://localhost:4000/courses/covers/${article.cover}`}
            alt="das"
            className="w-full h-auto"
          />
        </div>
        <div className="w-full p-3">
          <Link
            to="/articles"
            className="hover:text-blue-500 text-slate-700 text-xl"
          >
            {article.title}
          </Link>
        </div>
        <div className="w-full p-3">
          <p className="text-slate-600 text-sm">{article.description}</p>
        </div>
        <div className="w-full p-3">
          <Link
            to={`/singleArticle/${article.shortName}`}
            className="bg-transparent trsition-all duration-150 hover:bg-blue-500 font-bold px-3 py-2 text-lg rounded-md border-[1px] border-blue-500 text-blue-500 hover:text-white"
          >
            بیشتر بخوانید
          </Link>
        </div>
      </Link>
    </div>
  );
};

export default Article;
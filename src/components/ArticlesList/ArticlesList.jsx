import Article from "./Article/Article";

const ArticlesList = ({ data }) => {
  return (
    <div className="mt-7 px-2 flex justify-center flex-col md:flex-wrap md:flex-row md:justify-center items-center w-full">
      {data?.map((item) => {
        return <Article article={item} key={item.id} />;
      })}
    </div>
  );
};

export default ArticlesList;
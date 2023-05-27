import Comment from "./Comment/Comment";

const CommentList = ({ comments }) => {
  return (
    <div className="w-full flex justify-center items-center flex-col">
      {comments && comments.map((comment, i) => (
        <Comment comment={comment} key={i} />
      ))}
    </div>
  );
};

export default CommentList;
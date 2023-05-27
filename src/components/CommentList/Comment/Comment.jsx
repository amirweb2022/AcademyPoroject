import { Avatar } from "@mui/material";
import moment from "moment-jalaali";
const Comment = ({ comment }) => {
  return (
    <div className="w-full mt-3 p-3 flex flex-col border-[1px] border-gray-300 rounded-lg">
      <div className="w-full flex justify-between items-center border-b-[1px] border-gray-200 pb-2">
        <div className="flex justify-center items-center gap-x-2">
          <Avatar className="font-bold">
            {comment.creator.username.substring(0, 1)}
          </Avatar>
          <div className="flex flex-col justify-start items-start gap-y-1">
            <span className="text-xs md:text-sm text-slate-500 font-bold">
              {comment.creator.name}
            </span>
            <span className="text-xs text-slate-400">
              {moment(comment.creator.createdAt).format("jYYYY/jM/jD")}
            </span>
          </div>
        </div>
        <div>
          <button className="flex justify-center items-center bg-gray-200 p-2 rounded-md text-sm gap-x-1 text-gray-600 hover:bg-gray-100 transition-all duration-150">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 6 9 12.75l4.286-4.286a11.948 11.948 0 0 1 4.306 6.43l.776 2.898m0 0 3.182-5.511m-3.182 5.51-5.511-3.181"
                />
              </svg>
            </span>
            پاسخ
          </button>
        </div>
      </div>
      <div className="w-full text-justify py-3 text-slate-700">
        <p>{comment.body}</p>
      </div>
      {comment.answerContent ? (
        <div className="w-full flex justify-center flex-col items-start p-3 mt-3 bg-gray-100 rounded-lg">
          <div className="flex justify-start items-center gap-x-2 border-b-[1px] border-gray-200 w-full pb-2">
            <Avatar className="font-bold">
              {comment.answerContent.creator.username.substring(0, 1)}
            </Avatar>
            <div className="flex flex-col justify-start items-start gap-y-1">
              <span className="text-xs md:text-sm text-slate-500 font-bold">
                {comment.answerContent.creator.name}
              </span>
              <span className="text-xs text-slate-400">
                {moment(comment.answerContent.creator.createdAt).format(
                  "jYYYY/jM/jD"
                )}
              </span>
            </div>
          </div>
          <div className="w-full text-justify py-3 text-slate-700">
            <p>{comment.answerContent.body}</p>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Comment;
import { useFormik } from "formik";
import * as Yup from "yup";
import SelectOptions from "../../common/SelectOptions";
import TextArea from "../../common/TextArea";
import { addComment } from "../../services/addCommentServices";
import { useAuth } from "../../Providers/Auth/AuthProvider";
import { toast } from "react-hot-toast";
const options = [
  { value: 5, label: "خیلی عالی" },
  { value: 4, label: "عالی" },
  { value: 3, label: "خوب" },
  { value: 2, label: "بد" },
  { value: 1, label: "خیلی بد" },
];
const initialValues = {
  score: null,
  comment: "",
};
const validationSchema = Yup.object({
  score: Yup.string().required("امتیاز را وارد کنید"),
  comment: Yup.string().required("لطفا نظر خود را کامل وارد کنید"),
});
const RegisterCommentForm = ({ shortname }) => {
  const token = useAuth();
  const onSubmit = async (values) => {
    const addNewComment = {
      body: values.comment,
      courseShortName: shortname,
      score: values.score,
    };
    if (token) {
      try {
        await addComment(addNewComment, token);
        toast.success("ممنون بابت نظرتون");
      } catch (error) {
        toast.error(error);
      }
    } else {
      toast.error("لطفا ابتدا ورود کنید");
    }
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });
  return (
    <div className="w-full">
      <form
        className="w-full flex justify-start items-center flex-col gap-y-4"
        onSubmit={formik.handleSubmit}
      >
        <label className="text-sm text-slate-600 text-right w-full mt-3">
          امتیاز را وارد کنید:
        </label>
        <SelectOptions formik={formik} name="score" options={options} />
        <TextArea formik={formik} name="comment" />
        <div className="w-full">
          <button
            className="w-full text-white py-3 bg-blue-500 rounded-2xl hover:opacity-90"
            type="submit"
          >
            ثبت دیدگاه
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterCommentForm;

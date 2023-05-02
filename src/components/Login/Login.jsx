import { Link } from "react-router-dom";
import Input from "../../common/Input";
import { useFormik } from "formik";
import * as Yup from "yup";
const initialValues = {
  email: "",
  password: "",
};
const validationSchema = Yup.object({
  email: Yup.string().required("فیلد را پر کنید"),
  password: Yup.string().required("فیلد را پر کنید"),
});
const Login = () => {
  const onSubmit = async (values) => {
    console.log(values);
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });
  return (
    <div className="w-full lg:w-2/5 h-full flex justify-center items-center px-2 md:px-4">
      <form
        onSubmit={formik.handleSubmit}
        className="md:bg-white rounded-2xl md:shadow-md flex justify-center flex-col items-center px-2 py-4 lg:p-4 w-full"
      >
        <div className="w-full text-center py-3">
          <h2 className="text-2xl text-gray-950 font-black">فرانت هوکس</h2>
        </div>
        <div className="w-full text-center">
          <p className="text-sm text-gray-400">
            خوشحالیم دوباره میبینیمت دوست عزیز :)
          </p>
        </div>
        <div className="w-full rounded-lg py-3 my-2 flex justify-center items-center">
          <span className="text-slate-700 ml-2">کاربر جدید هستید ؟</span>
          <Link
            to="/signup"
            className="bg-blue-500 text-white px-3 py-2 rounded-lg transition-all duration-150 text-xs hover:bg-blue-400"
          >
            ثبت نام
          </Link>
        </div>
        <div className="flex justify-center items-center flex-col w-full">
          <Input name="email" label="نام کاربری یا ایمیل" formik={formik} />
          <Input
            name="password"
            label="رمز عبور"
            type="password"
            formik={formik}
          />
          <button
            className="w-full py-4 bg-blue-600 hover:opacity-90 shadow-lg shadow-gray-400 transtion-all duration-200 text-white my-2 rounded-2xl"
            type="submit"
          >
            ورود
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
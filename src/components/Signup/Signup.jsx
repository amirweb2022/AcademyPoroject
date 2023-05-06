import { Link, useNavigate, useSearchParams } from "react-router-dom";
import Input from "../../common/Input";
import { useFormik } from "formik";
import * as Yup from "yup";
import { singupUser } from "../../services/signupService";
import { useAuth, useAuthActions } from "../../Providers/Auth/AuthProvider";
import { toast } from "react-hot-toast";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
const initialValues = {
  name: "",
  username: "",
  email: "",
  phonenumber: "",
  password: "",
};
const validationSchema = Yup.object({
  name: Yup.string().required("فیلد را پر کنید"),
  username: Yup.string()
    .required("فیلد را پر کنید")
    .min(6, "نام کاربری باید حداقل 6 کاراکتر باشد"),
  email: Yup.string().email("ایمیل نامعتبر است").required("فیلد را پر کنید"),
  phonenumber: Yup.string()
    .required("فیلد را پر کنید")
    .matches(/^[0-9]{11}$/, "شماره تلفن نامعتبر است")
    .nullable(),
  password: Yup.string().required("فیلد را پر کنید"),
});
const Signup = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const setAuth = useAuthActions();
  const auth = useAuth();
  const navigate = useNavigate();
  const redirect = searchParams.get("redirect") || "/";
  useEffect(() => {
    if (auth) navigate(redirect);
  }, [redirect, auth]);
  const onSubmit = async (values) => {
    setLoading(true);
    const userInfos = {
      name: values.name,
      username: values.username,
      email: values.email,
      phone: values.phonenumber,
      password: values.password,
      confirmPassword: values.password,
    };
    try {
      const { data } = await singupUser(userInfos);
      setLoading(false);
      setAuth(data.accessToken);
      toast.success("به فرانت هوکس خوش آمدید");
      navigate("/");
    } catch (error) {
      if (error.response.status === 409) {
        setLoading(false);
        toast.error("نام کاربری یا رمز عبور موجود است");
      }
    }
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });
  return (
    <div className="w-full lg:w-1/3 h-full flex justify-center items-center px-2 py-4">
      <form
        onSubmit={formik.handleSubmit}
        className="md:bg-white rounded-2xl md:shadow-md flex justify-center flex-col items-center px-2 py-4 lg:p-4 w-full"
      >
        <div className="w-full text-center py-3">
          <h2 className="text-2xl text-gray-950 font-black">فرانت هوکس</h2>
        </div>
        <div className="w-full text-center">
          <p className="text-sm text-gray-400">
            به خونواده فرانت هوکس خوش اومدی:)
          </p>
        </div>
        <div className="w-full rounded-lg py-3 my-2 flex justify-center items-center">
          <span className="text-slate-700 ml-2">حساب کاربری دارید ؟</span>
          <Link
            to="/login"
            className="bg-blue-500 text-white px-3 py-2 rounded-lg transition-all duration-150 text-xs hover:bg-blue-400"
          >
            ورود
          </Link>
        </div>
        <div className="flex justify-center items-center flex-col w-full">
          <Input name="name" label="نام و خانوادگی" formik={formik} />
          <Input name="username" label="نام کاربری" formik={formik} />
          <Input name="email" label="آدرس ایمیل" formik={formik} />
          <Input name="phonenumber" label="شماره تماس" formik={formik} />
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
            {loading ? (
              <Box
                sx={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "center",
                }}
              >
                <CircularProgress color="inherit" />
              </Box>
            ) : (
              "ثبت نام"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;

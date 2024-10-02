"use client";

import MainButton from "@/components/ui/Button";
import MainInput from "@/components/ui/Input";
import { loginSchema } from "@/formik/login";
import { useFormik } from "formik";
import Head from "next/head";
import { useRouter } from "next/navigation";

type Props = {};

const LoginPage = (props: Props) => {
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: async (values, { setSubmitting }) => {
      //Call Api Login
      console.log(values);
      router.push("/products");
    },
  });

  return (
    <div className="h-screen flex justify-center items-center">
      <Head>
        <title>Login Page</title>
      </Head>
      <div className="max-w-md w-full mx-auto p-4 max-h-[500px]">
        <h2 className="text-3xl font-bold mb-4">Login</h2>
        <div className="gap-5 flex flex-col">
          <MainInput
            name="email"
            label="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            id="email"
            error={
              formik.touched.email && formik.errors.email
                ? formik.errors.email
                : null
            }
          />
          <MainInput
            name="password"
            label="Password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            id="password"
            error={
              formik.touched.password && formik.errors.password
                ? formik.errors.password
                : null
            }
          />
          <div className="flex items-center justify-between">
            <MainButton
              title={formik.isSubmitting ? "...." : "login"}
              handleClick={formik.handleSubmit}
              type="button"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

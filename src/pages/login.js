import {
  GoogleOutlined,
  GithubOutlined,
  FacebookOutlined,
} from "@ant-design/icons";
import Head from "next/head";
import styles from "@/styles/Login.module.css";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import RootLayout from "@/components/Layouts/RootLayout";

const LoginPage = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    // console.log(data);
    // createUserWithEmailAndPassword(data.email, data.password);
  };

  return (
    <div className="min-h-[90vh] flex items-center justify-center">
      <Head>
        <title>Next Login</title>
      </Head>
      <div className={styles.form}>
        <h3 className="text-center">LOGIN</h3>
        <div className="text-center py-5">
          {/* <GoogleOutlined
            onClick={() =>
              signIn("google", { callbackUrl: "http://localhost:3000/" })
            }
          /> */}
          <GithubOutlined
            onClick={() => signIn("github", { callbackUrl: process.env.URL })}
            className="text-3xl"
          />
        </div>
        <hr />
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="">Your Email</label>
          <input {...register("email", { required: true })} type="email" />

          <label htmlFor="">Your Password</label>
          <input
            {...register("password", { required: true })}
            type="password"
          />
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-400 text-xl text-white rounded-lg px-5 py-2 border-none outline-none cursor-pointer"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;

LoginPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from 'react-toastify';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { signinSchema } from "@/utils/validation-schema"
import CustomTextField from "../CustomTextField";
import CustomPasswordField from "../CustomPasswordField";
import axiosInstance from "@/utils/axios-instance";
import { useState } from "react";

interface FormData {
   email: string;
   password: string;
}

const SigninForm = () => {
   const router = useRouter();

   const [loading, setLoading] = useState(false);

   const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({ resolver: yupResolver(signinSchema) });

   const onSubmit = async (submittedData: FormData) => {
      try {
         setLoading(true);
         const response = await axiosInstance.post("api/auth/login", submittedData);

         if (response.status === 200) {
            toast.success("Login successfully", { position: "top-center" });
            reset();
            setTimeout(() => router.push("/dashboard/dashboard-index"), 2000);
         }

      } catch (error) {
         toast.error("An error occurred. Please try again.");
      } finally {
         setLoading(false);
      }
   };

   return (
      <form onSubmit={handleSubmit(onSubmit)}>
         <div className="row">
            <div className="col-12">
               <CustomTextField
                  register={register}
                  type={"email"}
                  name={"email"}
                  label={"Email"}
                  placeholder={"Please enter your email"}
                  errors={errors}
               />
            </div>
            <div className="col-12">
               <CustomPasswordField
                  register={register}
                  type={"password"}
                  name={"password"}
                  label={"Password"}
                  placeholder={"Please enter your password"}
                  errors={errors}
               />
            </div>
            <div className="col-12">
               <div className="agreement-checkbox d-flex justify-content-between align-items-center">
                  <div>
                     <input type="checkbox" id="remember" />
                     <label htmlFor="remember">Keep me logged in</label>
                  </div>
                  <Link href="#">Forget Password?</Link>
               </div>
            </div>
            <div className="col-12">
               <button type="submit" className="btn-two w-100 text-uppercase d-block mt-20" disabled={loading}>{loading ? "Login...." : "Login"}</button>
            </div>
         </div>
      </form>
   )
}

export default SigninForm;

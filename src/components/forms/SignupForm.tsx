"use client";
import { useState } from "react";
import Link from "next/link";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";

import { signupSchema } from "@/utils/validation-schema";
import CustomTextField from "../CustomTextField";
import CustomPasswordField from "../CustomPasswordField";
import axiosInstance from "@/utils/axios-instance";

interface FormData {
  name: string;
  email: string;
  password: string;
  termsAccepted: boolean;
}

const SignupForm = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(signupSchema),
  });

  const [loading, setLoading] = useState(false);

  const onSubmit = async (submittedData: FormData) => {
    setLoading(true);
    try {
      const response = await axiosInstance.post("/api/auth/signup", submittedData);

      if (response.status === 201) {
        toast.success("Registration successful!", {
          position: "top-center",
        });

        reset();
        setTimeout(() => router.push("/dashboard/dashboard-index"), 2000);
      }
    } catch (error: any) {
      toast.error(error.response?.data?.error || "Error during registration", {
        position: "top-center",
      });
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
            type={"text"}
            name={"name"}
            label={"Name"}
            placeholder={"Please enter your name"}
            errors={errors}
          />
        </div>
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
              <input type="checkbox" id="termsAccepted" {...register("termsAccepted")} />
              <label htmlFor="termsAccepted">
                By hitting the &quot;Register&quot; button, you agree to the{" "}
                <Link href="#">Terms conditions</Link> & <Link href="#">Privacy Policy</Link>
              </label>
              <p className="form_error">{errors.termsAccepted?.message}</p>
            </div>
          </div>
        </div>
        <div className="col-12">
          <button type="submit" className="btn-two w-100 text-uppercase d-block mt-20" disabled={loading}>
            {loading ? "Signing up..." : "SIGN UP"}
          </button>
        </div>
      </div>
    </form>
  );
};

export default SignupForm;

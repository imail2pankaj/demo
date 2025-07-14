import Image from 'next/image'
import React, { useState } from 'react'

import OpenEye from "@/assets/images/icon/icon_68.svg";

const CustomPasswordField = ({ name, label, register, errors, ...rest }) => {

  const [isPasswordVisible, setPasswordVisibility] = useState(false);
  const togglePasswordVisibility = () => setPasswordVisibility(!isPasswordVisible);

  return (
    <div className="input-group-meta position-relative mb-20">
      <label>{label} *</label>
      <input
        {...rest}
        type={isPasswordVisible ? "text" : "password"}
        {...register(name)}
        className="pass_log_id"
      />
      <span className="placeholder_icon">
        <span className={`passVicon ${isPasswordVisible ? "eye-slash" : ""}`}>
          <Image onClick={togglePasswordVisibility} src={OpenEye} alt="" />
        </span>
      </span>
      <p className="form_error">{errors?.[name]?.message}</p>
    </div>
  )
}

export default CustomPasswordField
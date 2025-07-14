
const CustomTextField = ({ name, label, register, errors, ...rest }) => {
  return (
    <div className="input-group-meta position-relative mb-25">
      <label>{label} *</label>
      <input
        {...register(name)}
        {...rest}
      />
      <p className="form_error">{errors?.[name]?.message}</p>
    </div>
  )
}

export default CustomTextField
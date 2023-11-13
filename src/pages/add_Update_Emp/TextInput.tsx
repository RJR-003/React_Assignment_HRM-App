import { useField } from "formik";
const TextInput = ({ label, ...props }: any) => {
  const [field, meta] = useField(props);
  return (
    <div className="form-entry">
      <label htmlFor={props.id || props.name}>{label}</label>
      <input {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="form-error">{meta.error}</div>
      ) : null}
    </div>
  );
};
export default TextInput;

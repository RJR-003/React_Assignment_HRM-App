import { useField } from "formik";

const FormSelectField = ({ arr, label, ...props }: any) => {
  const [field, meta] = useField(props);
  return (
    <div className="form-entry">
      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...field} {...props}>
        <option value="" hidden>
          select
        </option>
        {arr.map((item: string) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
      {meta.touched && meta.error ? (
        <div className="form-error">{meta.error}</div>
      ) : null}
    </div>
  );
};
export default FormSelectField;

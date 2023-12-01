import { useField } from "formik";

const FormSelectField = ({ isMultiple, arr, label, ...props }: any) => {
  const [field, meta] = useField(props);

  const selectTag = isMultiple ? (
    <select {...field} {...props} multiple="multiple" value={[]}>
      <option value="" hidden>
        select
      </option>
      {arr.sort().map((item: string, index: number) => (
        <option key={index} value={item}>
          {item}
        </option>
      ))}
    </select>
  ) : (
    <select {...field} {...props}>
      <option value="" hidden>
        select
      </option>
      {arr.sort().map((item: string, index: number) => (
        <option key={index} value={item}>
          {item}
        </option>
      ))}
    </select>
  );

  return (
    <div className="form-entry">
      <label htmlFor={props.id || props.name}>{label}</label>

      {selectTag}
      {meta.touched && meta.error ? (
        <div className="form-error">{meta.error}</div>
      ) : null}
    </div>
  );
};
export default FormSelectField;

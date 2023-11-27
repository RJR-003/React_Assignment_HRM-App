import { ChangeEvent } from "react";

function InputField({
  label,
  type,
  placeholder,
  src,
  alt,
  classname,
  accept,
  onChange,
  value,
}: {
  label?: string;
  type?: string;
  placeholder?: string;
  src?: string;
  alt?: string;
  id?: string;
  classname?: string;
  accept?: string;
  value?: string;
  onChange?: (e: ChangeEvent) => void;
}) {
  return (
    <div className={classname}>
      {label && <label htmlFor={label}>{label}</label>}
      <input
        onChange={onChange}
        type={type}
        id={label}
        placeholder={placeholder}
        accept={accept}
        value={value}
      />
      {src && <img src={src} alt={alt} />}
    </div>
  );
}

export default InputField;

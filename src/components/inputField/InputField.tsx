function InputField({
  label,
  type,
  placeholder,
  src,
  alt,
  classname,
  accept,
}: {
  label?: string;
  type?: string;
  placeholder?: string;
  src?: string;
  alt?: string;
  id?: string;
  classname?: string;
  accept?: string;
}) {
  return (
    <div className={classname}>
      {label && <label htmlFor={label}>{label}</label>}
      <input type={type} id={label} placeholder={placeholder} accept={accept} />
      {src && <img src={src} alt={alt} />}
    </div>
  );
}

export default InputField;

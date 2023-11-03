function InputField({
  type,
  placeholder,
  src,
  alt,
}: {
  type?: string;
  placeholder?: string;
  src?: string;
  alt?: string;
}) {
  return (
    <>
      <input type={type} placeholder={placeholder} />
      {src && <img src={src} alt={alt} />}
    </>
  );
}

export default InputField;

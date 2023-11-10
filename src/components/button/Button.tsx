function Button({
  src,
  alt,
  content,
  onClick,
}: {
  src?: string;
  alt?: string;
  content?: string;
  onClick: () => void;
}) {
  return (
    <button onClick={onClick}>
      {content && <span>{content}</span>}
      {src && <img src={src} alt={alt} />}
    </button>
  );
}

export default Button;

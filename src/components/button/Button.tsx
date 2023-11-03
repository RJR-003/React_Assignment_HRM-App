function Button({
  src,
  alt,
  content,
}: {
  src?: string;
  alt?: string;
  content?: string;
}) {
  return (
    <button>
      {content && <span>{content}</span>}
      {src && <img src={src} alt={alt} />}
    </button>
  );
}

export default Button;

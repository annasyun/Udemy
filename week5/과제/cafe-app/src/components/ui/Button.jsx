const Button = ({
  text,
  onClick,
  color,
  bgColor,
  width,
  height,
  border,
  borderRadius,
}) => {
  return (
    <button className={`${color} ${bgColor} `} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;

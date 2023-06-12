import React from "react";
import PropTypes from "prop-types";

const shapes = {
  CircleBorder35: "rounded-[35px]",
  RoundedBorder20: "rounded-[20px]",
  icbCircleBorder18: "rounded-[18px]",
};
const variants = {
  OutlineGray300:
    "bg-white_A700 border border-gray_300 border-solid text-gray_500",
  GradientAmber600PinkA200: "bg-gradient  text-white_A700",
  icbFillWhiteA700e5: "bg-white_A700_e5",
  icbFillGray10001: "bg-gray_100_01",
};
const sizes = {
  sm: "p-[19px]",
  md: "p-[22px] sm:px-5",
  smIcn: "p-2",
  mdIcn: "p-[11px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf([
    "CircleBorder35",
    "RoundedBorder20",
    "icbCircleBorder18",
  ]),
  variant: PropTypes.oneOf([
    "OutlineGray300",
    "GradientAmber600PinkA200",
    "icbFillWhiteA700e5",
    "icbFillGray10001",
  ]),
  size: PropTypes.oneOf(["sm", "md", "smIcn", "mdIcn"]),
};

Button.defaultProps = { className: "", shape: "", variant: "", size: "" };
export { Button };

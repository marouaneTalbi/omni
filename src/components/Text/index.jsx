import React from "react";

const variantClasses = {
  h1: "font-semibold sm:text-[32px] md:text-[38px] text-[42px]",
  h2: "font-normal md:text-2xl sm:text-[22px] text-[26px]",
  h3: "font-semibold text-2xl md:text-[22px] sm:text-xl",
  h4: "font-semibold text-[22px] sm:text-lg md:text-xl",
  h5: "font-semibold text-xl",
  h6: "text-lg",
  body1: "font-normal text-base",
  body2: "text-sm",
};

const Text = ({ children, className = "", variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variant && variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };

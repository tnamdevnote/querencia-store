import { forwardRef } from "react";

export interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  label?: string;
  variant?:
    | "primary"
    | "secondary"
    | "opaque"
    | "white"
    | "success"
    | "error"
    | "warning";
  size: "small" | "medium" | "large";
  isFullWidth?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      label,
      variant = "primary",
      size = "medium",
      isFullWidth,
      ...props
    },
    ref,
  ) => {
    return (
      <button
        type="button"
        ref={ref}
        {...props}
        className="bg-primary-100 font-heading h-14 w-[114px] px-8 py-4"
      >
        {label ? label : children}
      </button>
    );
  },
);

export default Button;

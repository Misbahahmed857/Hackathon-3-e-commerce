import { cn } from "@/lib/utils";
import React, { InputHTMLAttributes } from "react";

type InputGroupProps = {
  className?: string;
  children: React.ReactNode;
};

type InputTextProps = InputHTMLAttributes<HTMLInputElement>;

const InputGroup = ({ className, children }: InputGroupProps) => {
  return (
    <div
      className={cn(
        "input-group pl-4 transition-all relative flex items-center w-full rounded-full overflow-hidden",
        className ?? ""
      )}
    >
      {children}
    </div>
  );
};

const Input = React.forwardRef<HTMLInputElement, InputTextProps>(
  ({ className, ...rest }, ref) => {
    return (
      <input
        className={cn(
          "input-control w-full py-3 pr-4 outline-none placeholder:font-normal placeholder:text-sm",
          className ?? ""
        )}
        autoComplete="off"
        autoCorrect="off" // ✅ Correct usage
        spellCheck={false} // ✅ Use boolean for spellCheck
        ref={ref}
        {...rest}
      />
    );
  }
);

// ✅ Set a display name for better debugging
Input.displayName = "Input";

const InputGroupText = ({ className, children }: InputGroupProps) => {
  return (
    <div className={cn("input-group-text mr-3", className ?? "")}>
      {children}
    </div>
  );
};

// ✅ Set display names for better debugging
InputGroupText.displayName = "InputGroupText";
InputGroup.Text = InputGroupText;
InputGroup.Input = Input;

export default InputGroup;

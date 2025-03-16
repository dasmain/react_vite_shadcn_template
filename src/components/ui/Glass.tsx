
import React from "react";
import { cn } from "@/lib/utils";

interface GlassProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}

const Glass = ({ children, className, dark = false, ...props }: GlassProps) => {
  return (
    <div
      className={cn(
        dark ? "glass-dark" : "glass",
        "rounded-2xl shadow-glass",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Glass;

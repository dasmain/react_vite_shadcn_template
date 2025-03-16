
import React from "react";
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  text: string;
  className?: string;
  once?: boolean;
}

const AnimatedText = ({ text, className, once = true }: AnimatedTextProps) => {
  return (
    <div className={cn("overflow-hidden", className)}>
      <p
        className={cn(
          "animate-text-reveal",
          once ? "" : "hover:animate-text-reveal"
        )}
      >
        {text}
      </p>
    </div>
  );
};

export default AnimatedText;

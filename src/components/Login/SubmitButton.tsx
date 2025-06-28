import { Button } from "@/components/ui/button";
import React from "react";

type SubmitButtonProps = {
  children: React.ReactNode;
  className?: string;
};

export function SubmitButton({ children, className }: SubmitButtonProps) {
  return (
    <Button type="submit" className={className}>
      {children}
    </Button>
  );
}
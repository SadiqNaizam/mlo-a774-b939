import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type InputFieldProps = {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
};

export function InputField({ id, label, type = "text", placeholder }: InputFieldProps) {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor={id}>{label}</Label>
      <Input type={type} id={id} placeholder={placeholder} />
    </div>
  );
}
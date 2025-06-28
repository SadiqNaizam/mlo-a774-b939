import * as React from 'react';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
}

const InputField: React.FC<InputFieldProps> = ({ label, id, placeholder, ...props }) => {
  return (
    <div>
      <Label htmlFor={id} className="sr-only">
        {label}
      </Label>
      <Input
        id={id}
        placeholder={placeholder || label}
        {...props}
      />
    </div>
  );
};

export default InputField;

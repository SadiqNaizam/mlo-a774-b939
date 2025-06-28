import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { InputField } from "./InputField";
import { SubmitButton } from "./SubmitButton";
import { FooterLinks } from "./FooterLinks";

export function LoginCard() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>Enter your credentials to access your account.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <InputField id="email" label="Email" placeholder="m@example.com" />
        <InputField id="password" label="Password" type="password" />
      </CardContent>
      <CardFooter className="flex flex-col gap-4">
        <SubmitButton className="w-full">Sign In</SubmitButton>
        <FooterLinks />
      </CardFooter>
    </Card>
  );
}
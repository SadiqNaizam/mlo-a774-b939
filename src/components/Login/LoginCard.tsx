import * as React from 'react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import InputField from './InputField';
import SubmitButton from './SubmitButton';
import FooterLinks from './FooterLinks';

const LoginCard: React.FC = () => {
    const [username, setUsername] = React.useState<string>('');
    const [password, setPassword] = React.useState<string>('');
    const [isLoading, setIsLoading] = React.useState<boolean>(false);

    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        console.log('Logging in with:', { username, password });
        // Simulate an API call
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    };

    return (
        <Card className="w-[400px] bg-card text-card-foreground rounded-lg shadow-lg">
            <CardHeader className="px-6 pt-8 pb-4">
                <CardTitle className="text-2xl font-bold">Log in</CardTitle>
            </CardHeader>
            <CardContent className="px-6 pt-4 pb-8">
                <form onSubmit={handleLogin}>
                    <div className="flex flex-col gap-4">
                        <InputField
                            id="username"
                            label="Username"
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            disabled={isLoading}
                            autoComplete="username"
                        />
                        <InputField
                            id="password"
                            label="Password"
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            disabled={isLoading}
                            autoComplete="current-password"
                        />
                        <SubmitButton isLoading={isLoading} className="mt-2">
                            Log in
                        </SubmitButton>
                        <FooterLinks />
                    </div>
                </form>
            </CardContent>
        </Card>
    );
};

export default LoginCard;

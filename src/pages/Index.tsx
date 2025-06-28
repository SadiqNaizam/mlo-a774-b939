import MainAppLayout from "@/components/layout/MainAppLayout";
import { LoginCard } from "@/components/Login/LoginCard";

const IndexPage = () => {
  return (
    <MainAppLayout>
      <div className="flex flex-col items-center justify-center min-h-screen py-12">
        <h1 className="text-4xl font-bold mb-8">Welcome</h1>
        <p className="text-muted-foreground mb-12">The application background is now black.</p>
        <LoginCard />
      </div>
    </MainAppLayout>
  );
};

export default IndexPage;
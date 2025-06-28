import React from 'react';

type MainAppLayoutProps = {
  children: React.ReactNode;
};

const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children }) => {
  return (
    <main className="container mx-auto p-4">
      {children}
    </main>
  );
};

export default MainAppLayout;
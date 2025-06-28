import * as React from 'react';
import MainAppLayout from '@/components/layout/MainAppLayout';
import LoginCard from '@/components/Login/LoginCard';

/**
 * The main entry page for the application, which displays the login interface.
 * It utilizes a central layout to position the login card in the middle of the screen.
 */
const IndexPage: React.FC = () => {
  return (
    <MainAppLayout>
      <LoginCard />
    </MainAppLayout>
  );
};

export default IndexPage;

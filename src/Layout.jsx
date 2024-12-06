import React from 'react';
import { SidebarProvider, SidebarTrigger } from './components/ui';
import { LeftSidebar } from './pages';

const Layout = ({ children }) => {
  return (
    <SidebarProvider>
      <LeftSidebar />
      <main>
        {/* <SidebarTrigger /> */}
        {children}
      </main>
    </SidebarProvider>
  );
};

export default Layout;

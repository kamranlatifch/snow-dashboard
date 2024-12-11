import React from 'react';
import { SidebarProvider, SidebarTrigger } from './components/ui';
import { LeftSidebar, RightSidebar } from './pages';

const Layout = ({ children }) => {
  return (
    <SidebarProvider>
      <LeftSidebar />
      {/* <main> */}
      <SidebarTrigger className='mt-4  ml-16' side='left' />
      {children}
      <SidebarTrigger side='right' />

      <RightSidebar />
      {/* </main> */}
    </SidebarProvider>
  );
};

export default Layout;

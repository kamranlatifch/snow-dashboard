import { useEffect, useState } from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@components';
import { LeftSidebar, RightSidebar, MainContent } from '@pages';
import { SidebarProvider, SidebarInset, SidebarTrigger } from '@components';
import Layout from './Layout';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <SidebarProvider>
      <LeftSidebar />

      <MainContent />
      <RightSidebar />
    </SidebarProvider>
    // <>
    // <Layout>
    //   <MainContent />
    // </Layout>
    // </>
  );
}

export default App;

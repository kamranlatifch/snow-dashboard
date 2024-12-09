import { useEffect, useState } from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@components';
import { LeftSidebar, RightSidebar, MainContent } from '@pages';
import { SidebarProvider, SidebarInset, SidebarTrigger } from '@components';
import Layout from './Layout';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [rightSidebarOpen, setRightSidebarOpen] = useState(true);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);
  const [sideBar, setSideBar] = useState('');
  const [breadcrumbData, setBreadcrumbData] = useState([
    { label: 'Dashboard', href: '/' },
    { label: 'Default', href: '/' },
  ]);

  return (
    <SidebarProvider name={sideBar}>
      <LeftSidebar setBreadcrumbData={setBreadcrumbData} />

      <div
        className={`flex-1 transition-margin duration-300  ${
          rightSidebarOpen ? '' : ''
        }`}
      >
        <MainContent
          setSideBar={setSideBar}
          setRightSidebarOpen={setRightSidebarOpen}
          rightSidebarOpen={rightSidebarOpen}
          breadcrumbData={breadcrumbData}
        />
      </div>

      {/* Right Sidebar */}
      <div
        className={`transition-width duration-300 ${
          rightSidebarOpen ? 'w-[280px]' : 'w-[68px]'
        }`}
      >
        <RightSidebar rightSidebarOpen={rightSidebarOpen} />
      </div>
    </SidebarProvider>
  );
}

export default App;

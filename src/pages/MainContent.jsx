import React from 'react';
import { SidebarTrigger } from '@components';

const MainContent = () => {
  return (
    <main className='flex-1 overflow-auto bg-background'>
      <header className='flex h-16 items-center border-b px-4'>
        <SidebarTrigger className='mr-4' side='left' />
        <h1 className='text-2xl font-bold'>Main Content</h1>
        {/* <SidebarTrigger className='ml-auto' side='right' /> */}
      </header>
      <div className='p-4'>
        <p>
          This is the main content area. You can add your page content here.
        </p>
      </div>
    </main>
  );
};

export { MainContent };

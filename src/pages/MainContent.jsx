import React from 'react';
import {
  SidebarTrigger,
  Button,
  Input,
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@components';
import {
  BellIcon,
  ClockIcon,
  PanelRight,
  Sun,
  Command,
  Search,
  Star,
} from '@assets/svgs';
const MainContent = ({ setSideBar, setRightSidebarOpen, rightSidebarOpen }) => {
  return (
    <main className='flex-1 overflow-auto bg-background'>
      <header className='flex h-16 items-center border-b px-7 py-6 justify-between'>
        <div className='flex gap-2 justify-center items-center'>
          <SidebarTrigger
            className='mr-4'
            side='left'
            onClick={() => setSideBar('left')}
          />
          <Star />

          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink
                  className='font-inter text-text_secondary'
                  href='/'
                >
                  Dashboard
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className='font-inter text-text_primary'>
                  Default
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div className='flex gap-2 '>
          <div className='relative  w-[160px] h-[28px]'>
            <Search className='absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground' />
            <Input
              type='text'
              placeholder='Search'
              className='pl-7 w-[160px] border-none bg-softBlack h-[28px] font-inter text-text_primary rounded-[8px] placeholder:text-text_secondary_light'
            />
            <div className='absolute right-2 top-1/2 -translate-y-1/2 flex items-center'>
              <Command className='h-4 w-4 text-muted-foreground' />
            </div>
          </div>
          <Sun />

          <ClockIcon />
          <span className='sr-only'>Toggle Sidebar</span>

          <BellIcon />
          <span className='sr-only'>Toggle Sidebar</span>
          <div onClick={() => setRightSidebarOpen(!rightSidebarOpen)}>
            <PanelRight />
            <span className='sr-only'>Toggle Sidebar</span>
          </div>
        </div>
      </header>
      <div className='p-4'>
        <p>
          This is the main content area. You can add your page content here. sf
          s sdf ds fds fds f sdf sd fds f sdf sd f df sd fd fd f dsf ds f sdf ds
          fds f fds f sdf d fds fsd f sdf sd f sdf d fds f df ds fds f sd fd f
          sdf ds fds f dsf ds fd
        </p>
      </div>
    </main>
  );
};

export { MainContent };

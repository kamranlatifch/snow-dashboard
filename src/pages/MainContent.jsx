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
import { AddUser } from './AddUser';
import { CalendarFiles } from './CalendarFiles';
import { LatestFiles } from './LatestFiles';
import { ProjectSpendings } from './ProjectSpendings';
import { useTheme } from '../context/ThemeContext';
import { Moon } from 'lucide-react';
const MainContent = ({
  setSideBar,
  setRightSidebarOpen,
  rightSidebarOpen,
  breadcrumbData,
}) => {
  const { theme, toggleTheme } = useTheme();
  return (
    <main className='flex-1 bg-background overflow-auto'>
      <header className='flex   h-16 items-center border-b px-7 py-6 justify-between'>
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
                  {breadcrumbData?.[0]?.label}
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className='font-inter text-text_primary'>
                  {breadcrumbData?.[1]?.label}
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
          <div
            className='flex justify-center items-center'
            onClick={toggleTheme}
          >
            {theme === 'light' ? (
              <Sun className='cursor-pointer' />
            ) : (
              <Moon className='w-5 h-5 cursor-pointer' />
            )}
          </div>

          <ClockIcon className='dark:text-text_light' />
          <span className='sr-only'>Toggle Sidebar</span>

          <BellIcon className='dark:text-text_light' />
          <span className='sr-only'>Toggle Sidebar</span>
          <div onClick={() => setRightSidebarOpen(!rightSidebarOpen)}>
            <PanelRight className='dark:text-text_light cursor-pointer' />
            <span className='sr-only'>Toggle Sidebar</span>
          </div>
        </div>
      </header>

      <div className='flex flex-col gap-7 p-7'>
        <AddUser />
        <div className='flex flex-row gap-7 w-full'>
          <CalendarFiles />
          <LatestFiles />
        </div>
        <ProjectSpendings />
      </div>
    </main>
  );
};

export { MainContent };

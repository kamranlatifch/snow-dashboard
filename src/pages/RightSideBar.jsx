import React from 'react';
import { Bell, User, LogOut } from 'lucide-react';

const RightSidebar = ({ rightSidebarOpen }) => {
  return (
    <div
      className={`fixed right-0 top-0 h-full bg-white border-l shadow-lg transition-width duration-300 ${
        rightSidebarOpen ? 'w-[212px]' : 'w-12'
      }`}
    >
      {/* Sidebar Header */}
      <div className='px-4 py-4 border-b'>
        {rightSidebarOpen && (
          <h2 className='text-lg font-semibold'>Right Sidebar</h2>
        )}
      </div>

      {/* Sidebar Content */}
      <div className='flex flex-col gap-4 p-4'>
        <a
          href='#notifications'
          className='flex items-center gap-2 rounded hover:bg-gray-100 transition'
        >
          <Bell className='w-5 h-5' />
          {rightSidebarOpen && <span>Notifications</span>}
        </a>
        <a
          href='#profile'
          className='flex items-center gap-2 rounded hover:bg-gray-100 transition'
        >
          <User className='w-5 h-5' />
          {rightSidebarOpen && <span>Profile</span>}
        </a>
      </div>

      {/* Sidebar Footer */}
      <div className='absolute bottom-0 w-full p-4 border-t'>
        <button
          onClick={() => console.log('Logout clicked')}
          className='flex items-center gap-2  rounded hover:bg-gray-100 transition w-full'
        >
          <LogOut className='w-5 h-5' />
          {rightSidebarOpen && <span>Logout</span>}
        </button>
      </div>
    </div>
  );
};

export { RightSidebar };

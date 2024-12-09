import React from 'react';
import { Bell, User, LogOut } from 'lucide-react';
import { Bug } from '@assets/svgs';
const RightSidebar = ({ rightSidebarOpen }) => {
  return (
    <div
      className={`fixed right-0 px-5 py-6 top-0 h-full bg-white border-l shadow-lg transition-width duration-300 ${
        rightSidebarOpen ? 'w-[280px]' : 'w-12'
      }`}
    >
      {/* Sidebar Content */}
      <div className='flex flex-col gap-6'>
        <div className='flex flex-col gap-3'>
          <a
            href='#notifications'
            className='flex items-center p-1 font-inter text-sm text-text_primary font-semibold gap-2 rounded hover:bg-gray-100 transition'
          >
            {!rightSidebarOpen && <Bell className='w-5 h-5' />}
            {rightSidebarOpen && <span>Notifications</span>}
          </a>
          <div className='flex flex-col'>
            <div className='flex flex-row'>
              <Bug />
              <div className='flex flex-col'>
                <p className='font-inter text-sm font-normal'>
                  You have a bug that needs t...
                </p>
                <span>Just now</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { RightSidebar };

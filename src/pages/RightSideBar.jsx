import React from 'react';
import {
  Bell,
  User,
  LogOut,
  ActivityIcon,
  Contact2Icon,
  ContactIcon,
  PhoneIcon,
} from 'lucide-react';
import { Bug, NotPerson, NotWifi, ActivitiesBr } from '@assets/svgs';
import { NotificationCard } from './NotificationCard';
import Image1 from '../assets/images/Activities1.png';
import Image2 from '../assets/images/Activities2.png';
import Image3 from '../assets/images/Activities3.png';
import Image4 from '../assets/images/Activities4.png';
import Image5 from '../assets/images/Activities5.png';
import Contact1 from '../assets/images/Contact1.png';
import Contact2 from '../assets/images/Contact2.png';
import Contact3 from '../assets/images/Contact3.png';
import Contact4 from '../assets/images/Contact4.png';
import Contact5 from '../assets/images/Contact5.png';
import Contact6 from '../assets/images/Contact6.png';
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  useSidebar,
} from '@components';

import { ActivitiesCard } from './ActivitiesCard';

const RightSidebar = ({ rightSidebarOpen }) => {
  const NotificationData = [
    {
      Svg: Bug,
      title: 'You have a bug that needs t...',
      time: 'Just now',
    },
    {
      Svg: NotPerson,
      title: 'New user registered',
      time: '59 minutes ago',
    },
    {
      Svg: Bug,
      title: 'You have a bug that needs t...',
      time: '12 hours ago',
    },
    {
      Svg: NotWifi,
      title: 'Andi Lane subscribed to you',
      time: 'Today, 11:59 AM',
    },
  ];
  const ActivitiesData = [
    {
      image: Image1,
      title: 'Edited the details of Project X',
      time: 'Just now',
    },
    {
      image: Image2,

      title: 'Released a new version',
      time: '59 minutes ago',
    },
    {
      image: Image3,
      title: 'Submitted a bug',
      time: '12 hours ago',
    },
    {
      image: Image4,
      title: 'Modified A data in Page X',
      time: 'Today, 11:59 AM',
    },
    {
      image: Image5,
      title: 'Deleted a page in Project X',
      time: 'Feb 2, 2023',
    },
  ];
  const contactData = [
    {
      image: Contact1,
      name: 'Natali Craig',
    },
    {
      image: Contact2,
      name: 'Drew Cano',
    },
    {
      image: Contact3,
      name: 'Orlando Diggs',
    },
    {
      image: Contact4,
      name: 'Andi Lane',
    },
    {
      image: Contact5,
      name: 'Kate Morrison',
    },
    {
      image: Contact6,
      name: 'Koray Okumus',
    },
  ];
  const {
    state,
    open,
    setOpen,
    openMobile,
    setOpenMobile,
    isMobile,
    toggleSidebar,
  } = useSidebar();
  console.log('IS MOBILE IN RIGHT SIDEBAR IS ', isMobile);
  return (
    <div
      className={`fixed overflow-scroll right-0 px-5 py-6 top-0 h-full bg-white border-l shadow-lg transition-width duration-300 ${
        rightSidebarOpen ? 'w-[280px]' : 'w-[68px]'
      }`}
    >
      {/* Sidebar Content */}
      <div className='flex flex-col gap-6'>
        <div className='flex flex-col gap-3'>
          {!rightSidebarOpen && (
            <TooltipProvider delayDuration={0}>
              <Tooltip>
                <TooltipTrigger>
                  <Bell className='w-5 h-5' />
                </TooltipTrigger>
                <TooltipContent side='left' align='center'>
                  <p>Notifications</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}

          <a
            href='#notifications'
            className='flex items-center p-1 font-inter text-sm text-text_primary font-semibold gap-2 rounded hover:bg-gray-100 transition'
          >
            {rightSidebarOpen && <span>Notifications</span>}
          </a>
          <div
            className={`${
              rightSidebarOpen ? 'flex' : 'hidden'
            }  flex-col gap-2`}
          >
            {NotificationData?.map((item, index) => (
              <NotificationCard
                Svg={item.Svg}
                title={item.title}
                time={item.time}
              />
            ))}
          </div>
        </div>
        <div className='flex flex-col gap-3'>
          {!rightSidebarOpen && (
            <TooltipProvider delayDuration={0}>
              <Tooltip>
                <TooltipTrigger>
                  <ActivityIcon className='w-5 h-5' />
                </TooltipTrigger>
                <TooltipContent side='left' align='center'>
                  <p>Activities</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}

          <a
            href='#notifications'
            className='flex items-center p-1 font-inter text-sm text-text_primary font-semibold gap-2 rounded hover:bg-gray-100 transition'
          >
            {rightSidebarOpen && <span>Activities</span>}
          </a>
          <div
            className={`${
              rightSidebarOpen ? 'flex' : 'hidden'
            } relative flex-col gap-2`}
          >
            {ActivitiesData?.map((item, index) => (
              <ActivitiesCard
                image={item.image}
                title={item.title}
                time={item.time}
              />
            ))}
            <ActivitiesBr className='absolute left-4 top-9' />
          </div>
        </div>

        <div className='flex flex-col gap-3'>
          {!rightSidebarOpen && (
            <TooltipProvider delayDuration={0}>
              <Tooltip>
                <TooltipTrigger>
                  <PhoneIcon className='w-5 h-5' />
                </TooltipTrigger>
                <TooltipContent side='left' align='center'>
                  <p>Contacts</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}

          <a
            href='#contacts'
            className='flex items-center p-1 font-inter text-sm text-text_primary font-semibold gap-2 rounded hover:bg-gray-100 transition'
          >
            {rightSidebarOpen && <span>Contacts</span>}
          </a>
          <div
            className={`${
              rightSidebarOpen ? 'flex' : 'hidden'
            } relative flex-col gap-2`}
          >
            {contactData?.map((item, index) => (
              <div className='flex p-1 flex-row gap-2 '>
                <Avatar className='w-6 h-6'>
                  <AvatarImage src={item.image} />
                  <AvatarFallback>{item.name}</AvatarFallback>
                </Avatar>
                <p className='font-inter text-sm font-normal text-text_primary leading-[20px]'>
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export { RightSidebar };

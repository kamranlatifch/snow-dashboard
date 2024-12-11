import React from 'react';
import Image1 from '../assets/images/Activities1.png';
import Image2 from '../assets/images/Activities2.png';
import Image3 from '../assets/images/Activities3.png';
import Image4 from '../assets/images/Activities4.png';
import Image5 from '../assets/images/Activities5.png';
import { ActivitiesCard } from './ActivitiesCard';
import { ActivitiesBr } from '@assets/svgs';
const CalendarFiles = () => {
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
  return (
    <div className='flex flex-row gap-7 flex-grow'>
      <div className='flex flex-col bg-lightMist dark:bg-gray-700 p-6 rounded-[16px] gap-4 flex-grow'>
        <h3 className='font-inter font-semibold text-sm'>
          What's on the road?
        </h3>
        <div className='flex flex-row gap-[31px]'>
          <div className='flex flex-col p-1 rounded-[8px] w-7'>
            <p className='font-inter font-normal text-xs text-center text-text_secondary dark:text-text_light'>
              SU
            </p>
            <span className='font-inter font-semibold text-sm text-center text-text_primary dark:text-text_light'>
              22
            </span>
          </div>
          <div className='flex flex-col bg-text_primary p-1 rounded-[8px] w-7'>
            <p className='font-inter font-normal text-xs text-center text-text_light'>
              Mo
            </p>
            <span className='font-inter font-semibold text-sm text-center text-text_light '>
              23
            </span>
          </div>
          <div className='flex flex-col p-1 rounded-[8px] w-7'>
            <p className='font-inter font-normal text-xs text-center text-text_secondary dark:text-text_light'>
              Tu
            </p>
            <span className='font-inter font-semibold text-sm text-center text-text_primary dark:text-text_light'>
              24
            </span>
          </div>
          <div className='flex flex-col p-1 rounded-[8px] w-7'>
            <p className='font-inter font-normal text-xs text-center text-text_secondary dark:text-text_light'>
              We
            </p>
            <span className='font-inter font-semibold text-sm text-center text-text_primary dark:text-text_light'>
              25
            </span>
          </div>
          <div className='flex flex-col p-1 rounded-[8px] w-7'>
            <p className='font-inter font-normal text-xs text-center text-text_secondary dark:text-text_light'>
              Th
            </p>
            <span className='font-inter font-semibold text-sm text-center text-text_primary dark:text-text_light'>
              26
            </span>
          </div>
          <div className='flex flex-col p-1 rounded-[8px] w-7'>
            <p className='font-inter font-normal text-xs text-center text-text_secondary dark:text-text_light'>
              Fr
            </p>
            <span className='font-inter font-semibold text-sm text-center text-text_primary dark:text-text_light'>
              27
            </span>
          </div>
          <div className='flex flex-col p-1 rounded-[8px] w-7'>
            <p className='font-inter font-normal text-xs text-center text-text_secondary dark:text-text_light'>
              Sa
            </p>
            <span className='font-inter font-semibold text-sm text-center text-text_primary dark:text-text_light'>
              25
            </span>
          </div>
        </div>
        <div className={`flex relative flex-col gap-2`}>
          {ActivitiesData?.map((item, index) => (
            <ActivitiesCard
              key={index}
              image={item.image}
              title={item.title}
              time={item.time}
            />
          ))}
          <ActivitiesBr className='absolute left-4 top-9 dark:text-gray-300' />
        </div>
      </div>
    </div>
  );
};

export { CalendarFiles };

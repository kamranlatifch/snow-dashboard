import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@components';
const ActivitiesCard = ({ image, title, time }) => {
  return (
    <div className='flex p-1 flex-row gap-2 '>
      <Avatar className='w-6 h-6'>
        <AvatarImage src={image} />
        <AvatarFallback>{title}</AvatarFallback>
      </Avatar>
      <div className='flex flex-col'>
        <p className='font-inter text-sm font-normal leading-[20px]'>{title}</p>
        <span className='font-inter text-xs text-text_secondary leading-[18px]'>
          {time}
        </span>
      </div>
    </div>
  );
};

export { ActivitiesCard };

import React from 'react';

const NotificationCard = ({ Svg, title, time }) => {
  return (
    <div className='flex flex-row gap-2'>
      <Svg />
      <div className='flex flex-col'>
        <p className='font-inter text-sm font-normal'>{title}</p>
        <span className='font-inter text-xs text-text_secondary'>{time}</span>
      </div>
    </div>
  );
};

export { NotificationCard };
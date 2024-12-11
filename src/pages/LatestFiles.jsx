import React, { useRef } from 'react';
import { Pdf, Jpg, Zip, Xls, Download } from '@assets/svgs';
import { NotificationCard } from './NotificationCard';
import { Button } from '@components';
const LatestFiles = () => {
  const fileInputRef = useRef();

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      // Here you can handle the selected file
      console.log('Selected file:', file.name);
      // You can add your file upload logic here
    }
  };
  const NotificationData = [
    {
      Svg: Pdf,
      title: 'Project tech requirements.pdf',
      time: '5.6 MB / Just now / Karina Clark',
    },
    {
      Svg: Jpg,
      title: 'Dashboard-design.jpg',
      time: '2.3 MB / 59 minutes ago / Marcus Blake',
    },
    {
      Svg: Zip,
      title: 'Create FureStibe branding proposal.zip',
      time: '4.6 MB / 12 hours ago / Terry Barry',
    },
    {
      Svg: Pdf,
      title: 'Completed Project Stylings.pdf',
      time: '1.2 MB / Today, 11:59 AM / Roth Bloom',
    },
    {
      Svg: Xls,
      title: 'Create Project Wireframes.xls',
      time: '2.8 MB / Yesterday / Natali Craig',
    },
  ];
  return (
    <div className='flex flex-col bg-lightMist p-6 rounded-[16px] gap-4 w-[432px]'>
      <h3 className='font-inter font-semibold text-sm'>Latest Files</h3>

      <div className={`flex flex-col gap-2 relative`}>
        {NotificationData?.map((item, index) => (
          <NotificationCard
            Svg={item.Svg}
            title={item.title}
            time={item.time}
          />
        ))}
        <Download className='absolute right-0' />
      </div>
      <div className='flex flex-row justify-center items-center gap-4 py-[10px] bg-frostedMist rounded-[8px]'>
        <p className='font-inter font-normal font-xs text-text_secondary'>
          Drop files here or upload files
        </p>
        <div>
          <Button
            className='bg-softBlack text-text_primary text-xs'
            onClick={handleClick}
          >
            Upload
          </Button>
          <input
            type='file'
            ref={fileInputRef}
            onChange={handleFileChange}
            style={{ display: 'none' }}
          />
        </div>
      </div>
    </div>
  );
};

export { LatestFiles };

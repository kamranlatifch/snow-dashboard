import React from 'react';

const UserProfile = ({ className }) => {
  return (
    <svg
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M4.375 2.5H15.625C15.7907 2.5 15.9497 2.56592 16.0669 2.68311C16.1841 2.80029 16.25 2.95929 16.25 3.125V16.875C16.25 17.0407 16.1841 17.1997 16.0669 17.3169C15.9497 17.4341 15.7907 17.5 15.625 17.5H4.375C4.20929 17.5 4.05029 17.4341 3.93311 17.3169C3.81592 17.1997 3.75 17.0407 3.75 16.875V3.125C3.75 2.95929 3.81592 2.80029 3.93311 2.68311C4.05029 2.56592 4.20929 2.5 4.375 2.5ZM8.61115 12.7037C9.02222 12.9784 9.50562 13.125 10 13.125C10.663 13.125 11.299 12.8616 11.7677 12.3927C12.2366 11.924 12.5 11.288 12.5 10.625C12.5 10.1306 12.3534 9.64722 12.0787 9.23615C11.8039 8.82492 11.4136 8.50449 10.9567 8.31528C10.4999 8.12607 9.99725 8.07663 9.51233 8.17307C9.02725 8.2695 8.58185 8.50754 8.23227 8.85727C7.88254 9.20685 7.6445 9.65225 7.54807 10.1373C7.45163 10.6223 7.50107 11.1249 7.69028 11.5817C7.87949 12.0386 8.19992 12.4289 8.61115 12.7037Z'
        fill='black'
        fill-opacity='0.1'
      />
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M10 7.5C10 7.5 11.2944 7.5 12.2097 8.41529C12.2097 8.41529 13.125 9.33058 13.125 10.625C13.125 10.625 13.125 11.9194 12.2097 12.8347C12.2097 12.8347 11.2944 13.75 10 13.75C10 13.75 8.70558 13.75 7.79029 12.8347C7.79029 12.8347 6.875 11.9194 6.875 10.625C6.875 10.625 6.875 9.33058 7.79029 8.41529C7.79029 8.41529 8.70558 7.5 10 7.5ZM10 8.75C10 8.75 9.22335 8.75 8.67418 9.29917C8.67418 9.29917 8.125 9.84835 8.125 10.625C8.125 10.625 8.125 11.4017 8.67418 11.9508C8.67418 11.9508 9.22335 12.5 10 12.5C10 12.5 10.7767 12.5 11.3258 11.9508C11.3258 11.9508 11.875 11.4017 11.875 10.625C11.875 10.625 11.875 9.84835 11.3258 9.29917C11.3258 9.29917 10.7767 8.75 10 8.75Z'
        fill='#1C1C1C'
      />
      <path
        d='M11.8168 14.1789C12.6746 14.6078 13.25 15.375 13.25 15.375C13.3495 15.5076 13.4975 15.5953 13.6616 15.6187C13.6909 15.6229 13.7204 15.625 13.75 15.625L13.7521 15.625C13.8866 15.6245 14.0174 15.5807 14.125 15.5C14.2824 15.382 14.375 15.1967 14.375 15L14.3749 14.9918C14.3732 14.8594 14.3295 14.7309 14.25 14.625C13.4975 13.6217 12.3758 13.0609 12.3758 13.0609C11.2541 12.5 10 12.5 10 12.5C8.74589 12.5 7.62418 13.0609 7.62418 13.0609C6.50247 13.6217 5.75 14.625 5.75 14.625C5.66886 14.7332 5.625 14.8648 5.625 15L5.62502 15.0055C5.62527 15.0332 5.62736 15.0609 5.63128 15.0884C5.65472 15.2525 5.74239 15.4005 5.875 15.5C5.98319 15.5811 6.11477 15.625 6.25 15.625L6.2555 15.625C6.28324 15.6247 6.31093 15.6226 6.33839 15.6187C6.50248 15.5953 6.65054 15.5076 6.75 15.375C7.32542 14.6078 8.18319 14.1789 8.18319 14.1789C9.04097 13.75 10 13.75 10 13.75C10.959 13.75 11.8168 14.1789 11.8168 14.1789Z'
        fill='#1C1C1C'
      />
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M15.625 1.875C15.625 1.875 16.1428 1.875 16.5089 2.24112C16.5089 2.24112 16.875 2.60723 16.875 3.125V16.875C16.875 16.875 16.875 17.3928 16.5089 17.7589C16.5089 17.7589 16.1428 18.125 15.625 18.125H4.375C4.375 18.125 3.85723 18.125 3.49112 17.7589C3.49112 17.7589 3.125 17.3928 3.125 16.875L3.125 3.125C3.125 3.125 3.125 2.60723 3.49112 2.24112C3.49112 2.24112 3.85723 1.875 4.375 1.875L15.625 1.875ZM15.625 3.125L4.375 3.125L4.375 16.875H15.625V3.125Z'
        fill='#1C1C1C'
      />
      <path
        d='M7.5 5.625H12.5C12.8452 5.625 13.125 5.34518 13.125 5C13.125 4.65482 12.8452 4.375 12.5 4.375H7.5C7.15482 4.375 6.875 4.65482 6.875 5C6.875 5.34518 7.15482 5.625 7.5 5.625Z'
        fill='#1C1C1C'
      />
    </svg>
  );
};

export { UserProfile };
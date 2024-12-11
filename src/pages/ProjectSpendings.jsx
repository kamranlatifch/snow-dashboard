import React from 'react';
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Avatar,
  AvatarImage,
  AvatarFallback,
} from '@components';
import image1 from '../assets/images/Contact1.png';
import image2 from '../assets/images/Contact2.png';

import image3 from '../assets/images/Contact3.png';

import image4 from '../assets/images/Contact4.png';

import image5 from '../assets/images/Contact5.png';

const ProjectSpendings = () => {
  const spendings = [
    {
      id: 1,
      manager: { name: 'Koray Okumus', avatar: image1 },
      date: 'Jun 24, 2022',
      amount: '$942.00',
      status: 'Completed',
    },
    {
      id: 2,
      manager: { name: 'Jackson Lee', avatar: image2 },
      date: 'Mar 10, 2022',
      amount: '$1,500.00',
      status: 'In Progress',
    },
    {
      id: 3,
      manager: { name: 'Isabella Nguyen', avatar: image3 },
      date: 'Nov 10, 2022',
      amount: '$2,500.00',
      status: 'Approved',
    },
    {
      id: 4,
      manager: { name: 'William Kim', avatar: image4 },
      date: 'Dec 20, 2022',
      amount: '$3,800.00',
      status: 'Completed',
    },
    {
      id: 5,
      manager: { name: 'Emma Garcia', avatar: image5 },
      date: 'Nov 10, 2022',
      amount: '$4,200.00',
      status: 'Rejected',
    },
  ];

  function getStatusColor(status) {
    switch (status) {
      case 'Completed':
        return 'bg-[#4AA785]';
      case 'In Progress':
        return 'bg-[#8A8CD9]';
      case 'Approved':
        return 'bg-[#FFC555]';
      default:
        return 'bg-[#00000066] dark:bg-gray-400';
    }
  }
  function getTextColor(text) {
    switch (text) {
      case 'Completed':
        return 'text-[#4AA785]';
      case 'In Progress':
        return 'text-[#8A8CD9]';
      case 'Approved':
        return 'text-[#FFC555]';
      default:
        return 'text-[#00000066] dark:text-gray-400';
    }
  }
  return (
    <div className='flex flex-col p-6 bg-lightMist dark:bg-gray-700 rounded-[16px] gap-2'>
      <h4 className='font-inter font-normal text-sm'>Project Spendings</h4>

      <Table className='border-collapse'>
        <TableHeader>
          <TableRow>
            <TableHead className='w-[250px]'>Manager</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead className=''>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {spendings.map((transaction) => (
            <TableRow
              key={transaction.id}
              className='border-b border-gray-200 last:border-b-0'
            >
              <TableCell className='font-medium'>
                <div className='flex items-center space-x-3'>
                  <Avatar>
                    <AvatarImage
                      src={transaction.manager.avatar}
                      alt={transaction.manager.name}
                    />
                    <AvatarFallback>
                      {transaction.manager.name
                        .split(' ')
                        .map((n) => n[0])
                        .join('')}
                    </AvatarFallback>
                  </Avatar>
                  <span>{transaction.manager.name}</span>
                </div>
              </TableCell>
              <TableCell>{transaction.date}</TableCell>
              <TableCell>{transaction.amount}</TableCell>
              <TableCell
                className={`font-inter text-xs font-normal  ${getTextColor(
                  transaction.status
                )}`}
              >
                <div className='flex items-center'>
                  <div
                    className={`h-2.5 w-2.5 rounded-full mr-2  ${getStatusColor(
                      transaction.status
                    )}`}
                  ></div>
                  {transaction.status}
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export { ProjectSpendings };

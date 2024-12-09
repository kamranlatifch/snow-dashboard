import React from 'react';
import {
  Tabs,
  TabsTrigger,
  TabsList,
  TabsContent,
  Progress,
  Separator,
  Avatar,
  AvatarImage,
  AvatarFallback,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Label,
  DialogFooter,
  Input,
  Button,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from '@components';
import { SnowIcon } from '@assets/svgs';
import Image1 from '../assets/images/Activities1.png';
import Image2 from '../assets/images/Activities2.png';
import { Ellipsis } from 'lucide-react';

const Overview = () => (
  <div className='bg-lightMist mt-5 p-6 rounded-[16px] gap-4'>
    <div className='flex flex-row justify-between'>
      <h1 className='font-inter font-semibold text-[18px] '>
        Coffee detail page
      </h1>
      <SnowIcon />
    </div>
    <div className='flex flex-row justify-between'>
      <div className='flex flex-row gap-7'>
        <div className='flex flex-col gap-1 min-w-[163px]'>
          <span className='font-inter text-sm font-normal'>Status</span>
          <div className='w-full max-w-md'>
            <div className='relative pt-1'>
              <Progress value={51} className='h-6' />
              <div className='absolute top-1 inset-0 flex items-center justify-center'>
                <span className='text-sm font-medium text-primary-foreground'>
                  In Progress / 51%
                </span>
              </div>
            </div>
          </div>
        </div>
        <Separator orientation='vertical' className='h-[52px] w-[4px]' />
        <div className='flex flex-col gap-1 '>
          <span className='font-inter text-sm font-normal'>Total Tasks</span>
          <h3 className='font-inter font-semibold text-[18px] text-text_primary'>
            15 / 48
          </h3>
        </div>
        <Separator orientation='vertical' className='h-[52px] w-[4px]' />
        <div className='flex flex-col gap-1 '>
          <span className='font-inter text-sm font-normal'>Due Date</span>
          <h3 className='font-inter font-semibold text-[18px] text-text_primary'>
            29 Jan, 2022
          </h3>
        </div>
        <Separator orientation='vertical' className='h-[52px] w-[4px]' />
        <div className='flex flex-col gap-1 '>
          <span className='font-inter text-sm font-normal'>Budget Spent</span>
          <h3 className='font-inter font-semibold text-[18px] text-text_primary'>
            $15,000
          </h3>
        </div>
      </div>
      <div className='flex justify-center items-center mt-7'>
        <Avatar className='w-6 h-6'>
          <AvatarImage src={Image1} />
          <AvatarFallback>bg</AvatarFallback>
        </Avatar>
        <Avatar className='w-6 h-6 -ml-2 border'>
          <AvatarImage src={Image2} />
          <AvatarFallback>bg</AvatarFallback>
        </Avatar>
        <Avatar className='w-6 h-6 -ml-2 border-none'>
          <AvatarImage src='' />
          <AvatarFallback className='bg-[#E5ECF6] font-inter'>
            +3
          </AvatarFallback>
        </Avatar>
      </div>
    </div>
  </div>
);
const Targets = () => (
  <div className='bg-lightMist mt-5 p-6 rounded-[16px] gap-4'>
    <div className='flex flex-row justify-between'>
      <h1 className='font-inter font-semibold text-[18px] '>
        Target Detail Page
      </h1>
      <SnowIcon />
    </div>
    <div className='flex flex-row justify-between'>
      <div className='flex flex-row gap-7'>
        <div className='flex flex-col gap-1 min-w-[163px]'>
          <span className='font-inter text-sm font-normal'>Status</span>
          <div className='w-full max-w-md'>
            <div className='relative pt-1'>
              <Progress value={51} className='h-6' />
              <div className='absolute top-1 inset-0 flex items-center justify-center'>
                <span className='text-sm font-medium text-primary-foreground'>
                  In Progress / 51%
                </span>
              </div>
            </div>
          </div>
        </div>
        <Separator orientation='vertical' className='h-[52px] w-[4px]' />
        <div className='flex flex-col gap-1 '>
          <span className='font-inter text-sm font-normal'>Total Tasks</span>
          <h3 className='font-inter font-semibold text-[18px] text-text_primary'>
            15 / 48
          </h3>
        </div>
        <Separator orientation='vertical' className='h-[52px] w-[4px]' />
        <div className='flex flex-col gap-1 '>
          <span className='font-inter text-sm font-normal'>Due Date</span>
          <h3 className='font-inter font-semibold text-[18px] text-text_primary'>
            29 Jan, 2022
          </h3>
        </div>
        <Separator orientation='vertical' className='h-[52px] w-[4px]' />
        <div className='flex flex-col gap-1 '>
          <span className='font-inter text-sm font-normal'>Budget Spent</span>
          <h3 className='font-inter font-semibold text-[18px] text-text_primary'>
            $15,000
          </h3>
        </div>
      </div>
    </div>
  </div>
);
const Budget = () => <div>Budget Content</div>;
const Users = () => <div>Users Content</div>;
const Files = () => <div>Files Content</div>;
const Activity = () => <div>Activity Content</div>;
const Settings = () => <div>Settings Content</div>;

const AddUser = () => {
  const tabsData = [
    {
      id: 'overview',
      title: 'Overview',
      component: <Overview />,
    },
    {
      id: 'targets',
      title: 'Targets',
      component: <Targets />,
    },
    {
      id: 'budget',
      title: 'Budget',
      component: <Budget />,
    },
    {
      id: 'users',
      title: 'Users',
      component: <Users />,
    },
    {
      id: 'files',
      title: 'Files',
      component: <Files />,
    },
    {
      id: 'activity',
      title: 'Activity',
      component: <Activity />,
    },
    {
      id: 'settings',
      title: 'Settings',
      component: <Settings />,
    },
  ];
  return (
    <div>
      <Tabs defaultValue='overview'>
        <div className='flex flex-row justify-between gap-1'>
          <TabsList className='bg-transparent'>
            {tabsData.map((tab) => (
              <TabsTrigger
                key={tab.id}
                value={tab.id}
                className='bg-transparent px-2 py-1 text-text_secondary data-[state=active]:text-text_primary data-[state=active]:underline underline-offset-8'
              >
                {tab.title}
              </TabsTrigger>
            ))}
          </TabsList>
          <div className='flex flex-row gap-3'>
            <Dialog>
              <DialogTrigger className='font-inter text-sm text-text_secondary'>
                + Add User
              </DialogTrigger>
              <DialogContent className='sm:max-w-[425px]'>
                <DialogHeader>
                  <DialogTitle>Add User</DialogTitle>
                  <DialogDescription>
                    Add user profile here. Click save when you're done.
                  </DialogDescription>
                </DialogHeader>
                <div className='grid gap-4 py-4'>
                  <div className='grid grid-cols-4 items-center gap-4'>
                    <Label htmlFor='name' className='text-right'>
                      Name
                    </Label>
                    <Input
                      id='name'
                      defaultValue='Pedro Duarte'
                      className='col-span-3'
                    />
                  </div>
                  <div className='grid grid-cols-4 items-center gap-4'>
                    <Label htmlFor='username' className='text-right'>
                      Username
                    </Label>
                    <Input
                      id='username'
                      defaultValue='@peduarte'
                      className='col-span-3'
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button type='submit'>Save changes</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTrigger className='font-inter text-sm text-text_secondary'>
                Add Target
              </DialogTrigger>
              <DialogContent className='sm:max-w-[425px]'>
                <DialogHeader>
                  <DialogTitle>Add User</DialogTitle>
                  <DialogDescription>
                    Add user profile here. Click save when you're done.
                  </DialogDescription>
                </DialogHeader>
                <div className='grid gap-4 py-4'>
                  <div className='grid grid-cols-4 items-center gap-4'>
                    <Label htmlFor='name' className='text-right'>
                      Name
                    </Label>
                    <Input
                      id='name'
                      defaultValue='Pedro Duarte'
                      className='col-span-3'
                    />
                  </div>
                  <div className='grid grid-cols-4 items-center gap-4'>
                    <Label htmlFor='username' className='text-right'>
                      Username
                    </Label>
                    <Input
                      id='username'
                      defaultValue='@peduarte'
                      className='col-span-3'
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button type='submit'>Save changes</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            <DropdownMenu>
              <DropdownMenuTrigger>
                <Ellipsis className='text-text_secondary' />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem>Subscription</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        {tabsData.map((tab) => (
          <TabsContent key={tab.id} value={tab.id}>
            {tab.component}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export { AddUser };

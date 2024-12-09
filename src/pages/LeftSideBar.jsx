import React from 'react';
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenuSubItem,
  SidebarMenuSub,
  Avatar,
  AvatarImage,
  Collapsible,
  CollapsibleTrigger,
  AvatarFallback,
  CollapsibleContent,
  SidebarMenuSubButton,
  Tabs,
  TabsTrigger,
  TabsList,
  TabsContent,
  useSidebar,
} from '@components';
import {
  Home,
  Settings,
  HelpCircle,
  PersonStanding,
  Users,
  ChevronRight,
} from 'lucide-react';
import Image from '../assets/images/ByeWind.png';

import {
  Dot,
  Default,
  Ecommerce,
  Projects,
  OnlineCourse,
  UserProfile,
  Account,
  Corporate,
  Blog,
  Socials,
  Snow,
  SnowIcon,
} from '@assets/svgs';

const LeftSidebar = () => {
  const menuItems = [
    {
      groupLabel: 'Dashboard',
      subGroups: [
        {
          title: 'Default',
          icon: Default,
          items: [
            { title: 'Overview', href: '#' },
            { title: 'Analytics', href: '#' },
            { title: 'Projects', href: '#' },
            { title: 'Campaigns', href: '#' },
            { title: 'Followers', href: '#' },
          ],
        },
        {
          title: 'Ecommerce',
          icon: Ecommerce,
          items: [
            { title: 'Overview', href: '#' },
            { title: 'Analytics', href: '#' },
            { title: 'Projects', href: '#' },
            { title: 'Campaigns', href: '#' },
            { title: 'Followers', href: '#' },
          ],
        },
        {
          title: 'Projects',
          icon: Projects,
          items: [
            { title: 'Overview', href: '#' },
            { title: 'Analytics', href: '#' },
            { title: 'Projects', href: '#' },
            { title: 'Campaigns', href: '#' },
            { title: 'Followers', href: '#' },
          ],
        },
        {
          title: 'Online Courses',
          icon: OnlineCourse,
          items: [
            { title: 'Overview', href: '#' },
            { title: 'Analytics', href: '#' },
            { title: 'Projects', href: '#' },
            { title: 'Campaigns', href: '#' },
            { title: 'Followers', href: '#' },
          ],
        },
      ],
    },
    {
      groupLabel: 'Pages',
      subGroups: [
        {
          title: 'User Profile',
          icon: UserProfile,
          items: [
            { title: 'Overview', href: '#' },

            { title: 'Projects', href: '#' },
            { title: 'Campaigns', href: '#' },
            { title: 'Documents', href: '#' },
            { title: 'Followers', href: '#' },
          ],
        },
        {
          title: 'Account',
          icon: Account,
          items: [
            { title: 'Overview', href: '#' },
            { title: 'Analytics', href: '#' },
            { title: 'Projects', href: '#' },
            { title: 'Campaigns', href: '#' },
            { title: 'Followers', href: '#' },
          ],
        },
        {
          title: 'Corporate',
          icon: Corporate,
          items: [
            { title: 'Overview', href: '#' },
            { title: 'Analytics', href: '#' },
            { title: 'Projects', href: '#' },
            { title: 'Campaigns', href: '#' },
            { title: 'Followers', href: '#' },
          ],
        },
        {
          title: 'Blog',
          icon: Blog,
          items: [
            { title: 'Overview', href: '#' },
            { title: 'Analytics', href: '#' },
            { title: 'Projects', href: '#' },
            { title: 'Campaigns', href: '#' },
            { title: 'Followers', href: '#' },
          ],
        },
        {
          title: 'Social',
          icon: Socials,
          items: [
            { title: 'Overview', href: '#' },
            { title: 'Analytics', href: '#' },
            { title: 'Projects', href: '#' },
            { title: 'Campaigns', href: '#' },
            { title: 'Followers', href: '#' },
          ],
        },
      ],
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
  console.log('State in left sidebar is ', state);
  return (
    <Sidebar
      className=' bg-base'
      defaultOpen={true}
      variant='sidebar'
      collapsible='icon'
    >
      <SidebarHeader className='bg-base p-0'>
        <SidebarMenu>
          <SidebarMenuItem className=''>
            <SidebarMenuButton asChild>
              <a href='#home'>
                <Avatar className='w-6 h-6'>
                  <AvatarImage src={Image} />
                  <AvatarFallback>BW</AvatarFallback>
                </Avatar>

                <span className='font-inter font-normal text-sm'>ByeWind</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className='bg-base mt-4'>
        <SidebarMenu>
          <SidebarMenuItem>
            {state === 'expanded' && (
              <Tabs defaultValue='account' className='bg-transparent px-3'>
                <TabsList className='bg-transparent flex gap-3 justify-start'>
                  <TabsTrigger
                    value='account'
                    className='font-inter font-normal text-sm'
                  >
                    Favorites
                  </TabsTrigger>
                  <TabsTrigger
                    value='password'
                    className='font-inter font-normal text-sm'
                  >
                    Recently
                  </TabsTrigger>
                </TabsList>
                <TabsContent value='account' className='mt-1'>
                  <li className='flex items-center py-1 gap-2 font-inter text-sm font-normal text-text_primary'>
                    <Dot />
                    OverView
                  </li>
                  <li className='flex items-center py-1 gap-2 mt-1 font-inter text-sm font-normal text-text_primary'>
                    <Dot />
                    Projects
                  </li>
                </TabsContent>
                <TabsContent value='password' className='mt-1'>
                  <li className='flex items-center  py-1 gap-2 font-inter text-sm font-normal text-text_primary'>
                    <Dot />
                    Count
                  </li>
                  <li className='flex items-center gap-2  py-1 mt-1 font-inter text-sm font-normal text-text_primary'>
                    <Dot />
                    Pages
                  </li>
                </TabsContent>
              </Tabs>
            )}
          </SidebarMenuItem>
        </SidebarMenu>

        <SidebarGroup>
          {menuItems.map((data, index) => (
            <div key={index}>
              <SidebarGroupLabel className='font-inter px-4 font-normal text-sm text-text_secondary'>
                {data.groupLabel}
              </SidebarGroupLabel>
              <SidebarMenu>
                {data.subGroups.map((item) => (
                  <Collapsible
                    key={item.title}
                    asChild
                    className='group/collapsible'
                  >
                    <SidebarMenuItem className='p-0'>
                      <CollapsibleTrigger asChild className='p-0 mt-1'>
                        <SidebarMenuButton
                          variant='default'
                          tooltip={item.title}
                          className='relative'
                          // className='w-full'
                        >
                          {/* <div className='absolute hidden w-1 h-4 bg-black group-data-[state=open]/collapsible:flex rounded'></div> */}
                          {state === 'expanded' && (
                            <ChevronRight
                              className={`ml-auto ${
                                state === 'collapsed' ? 'hidden' : ''
                              }size-4 text-text_secondary_light transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90`}
                            />
                          )}{' '}
                          <item.icon className='size-4' />
                          <span className='font-inter  text-sm text-text_primary'>
                            {item.title}
                          </span>
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenuSub className='border-none'>
                          {item.items.map((subItem) => (
                            <SidebarMenuSubItem key={subItem.title}>
                              <SidebarMenuSubButton asChild>
                                <a href={subItem.href}>{subItem.title}</a>
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          ))}
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </SidebarMenuItem>
                  </Collapsible>
                ))}
              </SidebarMenu>
            </div>
          ))}
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className='bg-base items-center'>
        {state === 'collapsed' ? <SnowIcon className='w-5 h-5' /> : <Snow />}
      </SidebarFooter>
    </Sidebar>
  );
};
export { LeftSidebar };

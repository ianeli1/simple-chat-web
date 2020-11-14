import type { Story, Meta } from '@storybook/react/types-6-0';
import React from 'react';
import Sidebar, { SidebarProps } from './index';
import { Home } from '@material-ui/icons';

export default {
  component: Sidebar,
  title: 'Sidebar',

  decorators: [
    (Story) => (
      <div style={{ width: '80vh', height: '80vh' }}>
        <Story />
      </div>
    ),
  ],
} as Meta;

const Template: Story<SidebarProps> = (args) => <Sidebar {...args} />;

export const Default = Template.bind({});
Default.args = {
  screens: [
    {
      menu: {
        alt: 'Home',
        icon: <Home />,
      },
      element: (
        <div className="bg-blue-600 flex items-center justify-center">
          <Home />
        </div>
      ),
    },
    {
      menu: {
        alt: 'Home',
        icon: <Home />,
      },
      element: (
        <div className="bg-red-600 flex items-center justify-center">
          <Home />
        </div>
      ),
    },
  ],
};

import { Home, Settings } from '@material-ui/icons';
import type { Story, Meta } from '@storybook/react/types-6-0';
import React from 'react';
import TopBar, { TopBarProps } from './index';

export default {
  component: TopBar,
  title: 'Top Bar',
} as Meta;

const Template: Story<TopBarProps> = (args) => <TopBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Simple Chat Web',
};

export const With_Icons = Template.bind({});
With_Icons.args = {
  left: <Home />,
  title: 'Cool Icons!',
  right: <Settings />,
};

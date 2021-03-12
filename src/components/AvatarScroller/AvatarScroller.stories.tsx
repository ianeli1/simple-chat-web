import type { Story } from '@storybook/react/types-6-0';
import React from 'react';
import AvatarScroller, { AvatarScrollerProps } from './index';

export default {
  component: AvatarScroller,
  title: 'AvatarScroller',
};

const Template: Story<AvatarScrollerProps<string>> = (args) => (
  <AvatarScroller {...args} />
);

const dummyServers: AvatarScrollerProps<string>['elements'] = [
  { key: '1', alt: 'Hello' },
  { key: '2', alt: 'Bello' },
  { key: '3', alt: 'Cello' },
  { key: '4', alt: 'Dello' },
  { key: '5', alt: 'Fello' },
  { key: '6', alt: 'Eello' },
];

export const Vertical = Template.bind({});
Vertical.args = {
  elements: dummyServers,
  selected: '1',
};

export const Horizontal = Template.bind({});
Horizontal.args = {
  elements: dummyServers,
  selected: '1',
  orientation: 'h',
};

import AvatarN, { AvatarProps, Avatar } from '.';
import React from 'react';
import type { Story } from '@storybook/react/types-6-0';

export default {
  component: Avatar,
  title: 'Avatar',
};

const Template: Story<AvatarProps> = (args) => <Avatar {...args} />;
const coolIcon =
  'https://cdn.discordapp.com/attachments/616319929532022796/768983163937620018/output-onlinepngtools_5.png';

export const Default = Template.bind({});
Default.args = {
  icon: coolIcon,
  alt: 'Cool beans',
};

export const No_Icon = Template.bind({});
No_Icon.args = {
  alt: 'H',
};

import type { Story } from '@storybook/react/types-6-0';
import AvatarName, { ANProps } from './index';
import React from 'react';

export default {
  component: AvatarName,
  title: 'AvatarName',
};

const Template: Story<ANProps> = (args) => <AvatarName {...args} />;

const coolIcon =
  'https://cdn.discordapp.com/attachments/616319929532022796/768983163937620018/output-onlinepngtools_5.png';

export const Default = Template.bind({});
Default.args = {
  icon: coolIcon,
  title: 'Username',
};

export const No_Icon = Template.bind({});
No_Icon.args = {
  title: 'Username',
};

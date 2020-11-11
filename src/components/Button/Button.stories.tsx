import Button, { ButtonProps } from './index';
import type { Story } from '@storybook/react/types-6-0';
import Home from '@material-ui/icons/Home';
import React from 'react';

export default {
  component: Button,
  title: 'Button',
};

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Button',
};

export const Icon_Button = Template.bind({});
Icon_Button.args = {
  children: <Home />,
};

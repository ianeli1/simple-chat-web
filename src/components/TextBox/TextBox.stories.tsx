import type { Story, Meta } from '@storybook/react/types-6-0';
import React from 'react';
import TextBox, { TextBoxProps } from './index';
import Button from '../Button';
import { Home } from '@material-ui/icons';

export default {
  component: TextBox,
  title: 'Textbox',
} as Meta;

const Template: Story<TextBoxProps> = (a) => <TextBox {...a} />;

export const Default = Template.bind({});
Default.args = {
  value: 'Sample text',
};

export const With_Buttons = Template.bind({});
With_Buttons.args = {
  ...Default.args,
  left: <Button>test</Button>,
  right: (
    <Button>
      <Home />
    </Button>
  ),
};

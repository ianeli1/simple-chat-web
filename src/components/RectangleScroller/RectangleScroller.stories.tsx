import type { Story, Meta } from '@storybook/react/types-6-0';
import React from 'react';
import RectangleScroller, { RectangleScrollerProps } from './index';
import Avatar from '../Avatar';
import Button from '../Button';
import { Close, Add } from '@material-ui/icons';

export default {
  component: RectangleScroller,
  title: 'Rectangle Scroller',
  decorators: [
    (Story) => (
      <div style={{ width: '80vw', height: '80vh' }}>
        <Story />
      </div>
    ),
  ],
} as Meta;

const Template: Story<RectangleScrollerProps<string>> = (a) => (
  <RectangleScroller {...a} />
);

const coolAvatar = <Avatar alt="TS" />;
const epicButtons = (
  <>
    <Button color={false}>
      <Close />
    </Button>
    <Button color={false}>
      <Add />
    </Button>
  </>
);

export const Default = Template.bind({});
Default.args = {
  elements: [
    { title: 'Test1', key: '1' },
    { title: 'Test1', selected: true, key: '2' },
    { title: 'Test1', key: '3' },
    { title: 'Test1', key: '4' },
    { title: 'Test1', key: '5' },
    { title: 'Test1', key: '6' },
  ],
};

export const Avatar_List = Template.bind({});
Avatar_List.args = {
  elements: Default.args.elements?.map((i) => ({ ...i, left: coolAvatar })),
};

export const With_Buttons = Template.bind({});
With_Buttons.args = {
  elements: Avatar_List.args.elements?.map((i) => ({
    ...i,
    right: epicButtons,
  })),
};

import type { Story, Meta } from '@storybook/react/types-6-0';
import React from 'react';
import Message, { MessageProps } from './index';

export default {
  component: Message,
  title: 'Message',
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '50vw', maxHeight: '80vh' }}>
        <Story />
      </div>
    ),
  ],
} as Meta;

const Template: Story<MessageProps> = (a) => <Message {...a} />;

const message: MessageProps['message'] = {
  author: {
    id: '1',
    name: 'BoiSourish',
    icon:
      'https://cdn.discordapp.com/attachments/616319929532022796/768983163937620018/output-onlinepngtools_5.png',
  },
  content: 'Hello world',
  createdAt: new Date(),
  id: 1,
};

export const Default = Template.bind({});
Default.args = {
  message,
};

export const With_Image = Template.bind({});
With_Image.args = {
  message: {
    ...message,
    image: message.author.icon,
  },
};

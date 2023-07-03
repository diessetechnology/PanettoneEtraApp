import {TopBar as Component} from './TopBar';
import type {StoryObj, Meta} from '@storybook/react';

type Story = StoryObj<typeof Component>;

const meta: Meta<typeof Component> = {
  title: 'Group 2',
  component: Component,
};

export const Group2: Story = {
  // ...
};

export default meta;

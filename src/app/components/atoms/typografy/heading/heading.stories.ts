
import { Meta, Story } from '@storybook/angular';

import { HeadingComponent } from './heading.component';


export default {
  component: HeadingComponent,
  title: 'Typografy/Heading',
  excludeStories: /.*Data$/,
} as Meta;


const Template: Story = args => ({
  props: {
    ...args,
  },
});

export const Default = Template.bind({});
Default.args = {
    content: 'Texto padrão',
    class: 'h1',
};

export const H4 = Template.bind({});
H4.args = {
    content: 'Texto padrão',
    class: 'h4',
};

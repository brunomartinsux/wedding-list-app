
import { Meta, Story } from '@storybook/angular';
import { TextComponent } from './text.component';


export default {
  component: TextComponent,
  title: 'Typografy/Text',
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
};


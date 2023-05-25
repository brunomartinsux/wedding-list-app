
import { Meta, Story } from '@storybook/angular';
import { InputComponent } from './input.component';

export default {
  component: InputComponent,
  title: 'Atoms/Input',
  excludeStories: /.*Data$/,
} as Meta;


const Template: Story = args => ({
  props: {
    ...args,
  },
  template: `
  <app-input>
  </app-input>
  `
});

export const Default = Template.bind({});
Default.args = {
    placeholder: 'Digite aqui...',
};



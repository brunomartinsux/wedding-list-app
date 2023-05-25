
import { Meta, Story } from '@storybook/angular';
import { ButtonComponent } from './button.component';

export default {
  component: ButtonComponent,
  title: 'Atoms/Buttons',
  excludeStories: /.*Data$/,
} as Meta;


const Template: Story = args => ({
  props: {
    ...args,
  },
  template: `
   <app-button [class]="class">
    Button
   </app-button>
  `
});

export const Primary = Template.bind({});
Primary.args = {
    class: 'primary',
};

export const BtnIcon = Template.bind({});
BtnIcon.args = {
    class: 'btn-icon',
};



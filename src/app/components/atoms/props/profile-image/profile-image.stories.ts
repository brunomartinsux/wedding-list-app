
import { Meta, Story } from '@storybook/angular';
import { ProfileImageComponent } from './profile-image.component';

export default {
  component: ProfileImageComponent,
  title: 'Atoms/Image',
  excludeStories: /.*Data$/,
} as Meta;


const Template: Story = args => ({
  props: {
    ...args,
  },
});

export const Default = Template.bind({});
Default.args = {};

export const SmallImage = Template.bind({});
SmallImage.args = {
    src: 'https://picsum.photos/300',
    size: 'sm',
};


export const MdImage = Template.bind({});
MdImage.args = {
    src: 'https://picsum.photos/300',
    size: 'md',
};


export const LargeImage = Template.bind({});
LargeImage.args = {
    src: 'https://picsum.photos/300',
    size: 'lg',
};

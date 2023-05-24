
import { Meta, Story } from '@storybook/angular';
import { GuestCardComponent } from './guest-card.component';
import { ProfileImageComponent } from '../../atoms/props/profile-image/profile-image.component';
import { HeadingComponent } from '../../atoms/typografy/heading/heading.component';
import { TextComponent } from '../../atoms/typografy/text/text.component';
import { ButtonComponent } from '../../atoms/button/button.component';


export default {
  component: GuestCardComponent,
  title: 'Molecules/Guest Card',
  excludeStories: /.*Data$/,
} as Meta;


const Template: Story = args => ({
  props: {
    ...args,
  },
  moduleMetadata: {
    declarations: [
        ProfileImageComponent,
        HeadingComponent,
        TextComponent,
        ButtonComponent
    ]
  }
});

export const Empty = Template.bind({});

export const OwnerCard = Template.bind({});
OwnerCard.args = {
    guest: {name: 'Jorge Luiz', status: 'owner', img: 'https://picsum.photos/300'}
}

export const GuestCard = Template.bind({});
GuestCard.args = {
    guest: {name: 'Jorge Luiz', status: 'guest', img: 'https://picsum.photos/300'}
};
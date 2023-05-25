
import { Meta, Story } from '@storybook/angular';
import { ProfileImageComponent } from '../../atoms/props/profile-image/profile-image.component';
import { HeadingComponent } from '../../atoms/typografy/heading/heading.component';
import { TextComponent } from '../../atoms/typografy/text/text.component';
import { ButtonComponent } from '../../atoms/button/button.component';
import { GuestListComponent } from './guest-list.component';
import { GuestCardComponent } from '../../molecules/guest-card/guest-card.component';
import { AddMemberComponent } from '../../molecules/add-member/add-member.component';
import { InputComponent } from '../../atoms/input/input.component';


export default {
    component: GuestListComponent,
    title: 'Organisms/Guest List',
    excludeStories: /.*Data$/,
} as Meta;


const Template: Story = args => ({
    props: {
        ...args,
    },
    moduleMetadata: {
        declarations: [
            GuestListComponent,
            ProfileImageComponent,
            HeadingComponent,
            TextComponent,
            ButtonComponent,
            GuestCardComponent,
            AddMemberComponent,
            InputComponent
        ]
    }
});

export const Default = Template.bind({});
Default.args = {
    guestList: [{ name: 'Jorge Luiz', status: 'owner', img: 'https://picsum.photos/300' }]
};

export const ScrollableList = Template.bind({});
ScrollableList.args = {
    guestList: [{ name: 'Jorge Luiz', status: 'owner', img: 'https://picsum.photos/300' }, 
    { name: 'Jorge Luiz', status: 'guest', img: 'https://picsum.photos/300' }, 
    { name: 'Jorge Luiz', status: 'guest', img: 'https://picsum.photos/300' }, 
    { name: 'Jorge Luiz', status: 'guest', img: 'https://picsum.photos/300' }, 
    { name: 'Jorge Luiz', status: 'guest', img: 'https://picsum.photos/300' }, 
    { name: 'Jorge Luiz', status: 'guest', img: 'https://picsum.photos/300' }, 
    { name: 'Jorge Luiz', status: 'guest', img: 'https://picsum.photos/300' }]
}

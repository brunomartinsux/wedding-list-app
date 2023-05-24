import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ButtonComponent } from './components/atoms/button/button.component';
import { TextComponent } from './components/atoms/typografy/text/text.component';
import { HeaderComponent } from './components/molecules/header/header.component';
import { GuestCardComponent } from './components/molecules/guest-card/guest-card.component';
import { HeadingComponent } from './components/atoms/typografy/heading/heading.component';
import { ProfileImageComponent } from './components/atoms/props/profile-image/profile-image.component';
import { GuestListComponent } from './components/organisms/guest-list/guest-list.component';
import { MainGuestListComponent } from './components/templates/main-guest-list/main-guest-list.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { InputComponent } from './components/atoms/input/input.component';
import { AddMemberComponent } from './components/molecules/add-member/add-member.component';


@NgModule({
  declarations: [
    AppComponent, 
    ButtonComponent, 
    HeadingComponent, 
    TextComponent, 
    HeaderComponent, 
    GuestCardComponent, 
    ProfileImageComponent, GuestListComponent, MainGuestListComponent, HomePageComponent, InputComponent, AddMemberComponent
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

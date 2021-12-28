import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { Login } from './pages/login/login.component';
import { BaseLayoutComponent } from './pages/base-layout/base-layout.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import { BannerComponent } from './components/banner/banner.component';
import { GroupComponent } from './pages/group/group.component';
import { HomeComponent } from './pages/home/home.component';
import { LibraryComponent } from './pages/library/library.component';
import { EventsComponent } from './pages/events/events.component';
import { LearnComponent } from './pages/learn/learn.component';
import { ButtonBlackComponent } from './components/button/button-black/button-black.component';
import { ButtonYellowComponent } from './components/button/button-yellow/button-yellow.component';
import { ButtonLinkComponent } from './components/button/button-link/button-link.component';
import { GroupPostComponent } from './components/group-post/group-post.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { RecentPostComponent } from './components/recent-post/recent-post.component';
import { TextInputComponent } from './components/text-input/text-input.component';
import { ProfileComponent } from './components/profile/profile.component';
import { GroupsComponent } from './components/groups/groups.component';
import { UpcomingEventsComponent } from './components/upcoming-events/upcoming-events.component';
import { LeftFooterComponent } from './components/left-footer/left-footer.component';
import { FormsModule } from '@angular/forms';
import { FeedbackModalComponent } from './components/modals/feedback-modal/feedback-modal.component';
import { CreateGroupComponent } from './components/create-group/create-group.component';
import { GroupModalComponent } from './components/modals/group-modal/group-modal.component';
import { GroupDetailComponent } from './pages/group-detail/group-detail.component';
import { TopBannerComponent } from './components/top-banner/top-banner.component';
import { GroupInfoComponent } from './components/group-info/group-info.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    Login,
    BannerComponent,
    GroupComponent,
    HomeComponent,
    LibraryComponent,
    EventsComponent,
    LearnComponent,
    BaseLayoutComponent,
    BannerComponent,
    ButtonBlackComponent,
    ButtonYellowComponent,
    ButtonLinkComponent,
    GroupPostComponent,
    CreatePostComponent,
    RecentPostComponent,
    TextInputComponent,
    ProfileComponent,
    GroupsComponent,
    UpcomingEventsComponent,
    LeftFooterComponent,
    FeedbackModalComponent,
    CreateGroupComponent,
    GroupModalComponent,
    GroupDetailComponent,
    TopBannerComponent,
    GroupInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

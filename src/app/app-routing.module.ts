import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Login } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { GroupComponent } from './pages/group/group.component';
import { LibraryComponent } from './pages/library/library.component';
import { EventsComponent } from './pages/events/events.component';
import { LearnComponent } from './pages/learn/learn.component';
import { GroupDetailComponent } from './pages/group-detail/group-detail.component';
import { BaseLayoutComponent } from './pages/base-layout/base-layout.component';

const routes: Routes = [
  { path: '', redirectTo: 'usc/home', pathMatch: 'full' },
  { path: 'login', component: Login },
  {
    path: 'usc',
    component: BaseLayoutComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'groups', component: GroupComponent },
      { path: 'groups/group-detail', component: GroupDetailComponent },
      { path: 'library', component: LibraryComponent },
      { path: 'events', component: EventsComponent },
      { path: 'learn', component: LearnComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

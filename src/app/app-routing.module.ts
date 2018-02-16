import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RacesAndEventsComponent } from './races-and-events/races-and-events.component';
import { ResourcesComponent } from './resources/resources.component';
import { InitiativesComponent } from './initiatives/initiatives.component';
import { FaqComponent } from './faq/faq.component';
import { PhotosAndStoriesComponent } from './photos-and-stories/photos-and-stories.component';

const appRoutes: Routes = [
  { path: 'races-and-events', component: RacesAndEventsComponent },
  { path: 'resources', component: ResourcesComponent },
  { path: 'initiatives', component: InitiativesComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'photos-and-stories', component: PhotosAndStoriesComponent },
  { path: '**', redirectTo: 'races-and-events'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: true,
      }
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [
  ]
})
export class AppRoutingModule { }

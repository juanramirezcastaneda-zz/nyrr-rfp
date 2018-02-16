import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RacesAndEventsComponent } from './races-and-events/races-and-events.component';
import { ResourcesComponent } from './resources/resources.component';
import { InitiativesComponent } from './initiatives/initiatives.component';
import { FaqComponent } from './faq/faq.component';
import { PhotosAndStoriesComponent } from './photos-and-stories/photos-and-stories.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    RacesAndEventsComponent,
    ResourcesComponent,
    InitiativesComponent,
    FaqComponent,
    PhotosAndStoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

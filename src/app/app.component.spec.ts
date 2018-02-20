import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MobileMenuBarComponent } from './mobile-menu-bar/mobile-menu-bar.component';
import { RouterModule, Router, RouterOutlet } from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
import { APP_BASE_HREF } from '@angular/common';

import { RacesAndEventsComponent } from './races-and-events/races-and-events.component';
import { ResourcesComponent } from './resources/resources.component';
import { InitiativesComponent } from './initiatives/initiatives.component';
import { FaqComponent } from './faq/faq.component';
import { PhotosAndStoriesComponent } from './photos-and-stories/photos-and-stories.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MobileMenuBarComponent,
        RacesAndEventsComponent,
        ResourcesComponent,
        InitiativesComponent,
        FaqComponent,
        PhotosAndStoriesComponent
      ],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
      imports: [RouterModule, AppRoutingModule]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have the default isMenuActive as false`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.isMenuActive).toEqual(false);
  }));
  it('should call openMenu and set isMenuActive to true', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.isMenuActive).toEqual(false);

    app.openMenu();

    expect(app.isMenuActive).toEqual(true);
  }));
});

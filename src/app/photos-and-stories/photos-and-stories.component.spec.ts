import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotosAndStoriesComponent } from './photos-and-stories.component';

describe('PhotosAndStoriesComponent', () => {
  let component: PhotosAndStoriesComponent;
  let fixture: ComponentFixture<PhotosAndStoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotosAndStoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotosAndStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

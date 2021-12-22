import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoCommentsComponent } from './photo-comments.component';

describe('PhotoCommentsComponent', () => {
  let component: PhotoCommentsComponent;
  let fixture: ComponentFixture<PhotoCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoCommentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

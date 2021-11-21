import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VMessageComponent } from './vmessage.component';

describe('VMessageComponent', () => {
  let component: VMessageComponent;
  let fixture: ComponentFixture<VMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

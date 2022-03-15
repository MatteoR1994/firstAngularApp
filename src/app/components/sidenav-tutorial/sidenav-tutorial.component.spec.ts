import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavTutorialComponent } from './sidenav-tutorial.component';

describe('SidenavTutorialComponent', () => {
  let component: SidenavTutorialComponent;
  let fixture: ComponentFixture<SidenavTutorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidenavTutorialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

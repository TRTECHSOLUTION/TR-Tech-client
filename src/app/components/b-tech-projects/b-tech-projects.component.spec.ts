import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BTechProjectsComponent } from './b-tech-projects.component';

describe('BTechProjectsComponent', () => {
  let component: BTechProjectsComponent;
  let fixture: ComponentFixture<BTechProjectsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BTechProjectsComponent]
    });
    fixture = TestBed.createComponent(BTechProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

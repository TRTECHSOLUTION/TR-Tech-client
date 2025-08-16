import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BriefProjectComponent } from './brief-project.component';

describe('BriefProjectComponent', () => {
  let component: BriefProjectComponent;
  let fixture: ComponentFixture<BriefProjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BriefProjectComponent]
    });
    fixture = TestBed.createComponent(BriefProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

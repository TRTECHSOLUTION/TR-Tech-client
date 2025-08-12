import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaperPublishingComponent } from './paper-publishing.component';

describe('PaperPublishingComponent', () => {
  let component: PaperPublishingComponent;
  let fixture: ComponentFixture<PaperPublishingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaperPublishingComponent]
    });
    fixture = TestBed.createComponent(PaperPublishingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

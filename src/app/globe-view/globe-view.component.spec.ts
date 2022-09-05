import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobeViewComponent } from './globe-view.component';

describe('GlobeViewComponent', () => {
  let component: GlobeViewComponent;
  let fixture: ComponentFixture<GlobeViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlobeViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

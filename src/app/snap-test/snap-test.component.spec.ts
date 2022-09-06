import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnapTestComponent } from './snap-test.component';

describe('SnapTestComponent', () => {
  let component: SnapTestComponent;
  let fixture: ComponentFixture<SnapTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnapTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SnapTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

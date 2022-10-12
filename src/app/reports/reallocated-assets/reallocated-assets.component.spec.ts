import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReallocatedAssetsComponent } from './reallocated-assets.component';

describe('ReallocatedAssetsComponent', () => {
  let component: ReallocatedAssetsComponent;
  let fixture: ComponentFixture<ReallocatedAssetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReallocatedAssetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReallocatedAssetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

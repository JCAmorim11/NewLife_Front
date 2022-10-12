import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchHuntComponent } from './search-hunt.component';

describe('SearchHuntComponent', () => {
  let component: SearchHuntComponent;
  let fixture: ComponentFixture<SearchHuntComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchHuntComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchHuntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

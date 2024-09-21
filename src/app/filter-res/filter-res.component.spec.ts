import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterResComponent } from './filter-res.component';

describe('FilterResComponent', () => {
  let component: FilterResComponent;
  let fixture: ComponentFixture<FilterResComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FilterResComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterResComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookPagComponent } from './book-pag.component';

describe('BookPagComponent', () => {
  let component: BookPagComponent;
  let fixture: ComponentFixture<BookPagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookPagComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookPagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

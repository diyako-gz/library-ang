import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksSHowComponent } from './books-show.component';



describe('BooksSHowComponent', () => {
  let component: BooksSHowComponent;
  let fixture: ComponentFixture<BooksSHowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BooksSHowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BooksSHowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

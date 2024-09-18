import { Component, OnInit } from '@angular/core';
import { BookDataService } from '../book-data.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-books-show',
  templateUrl: './books-show.component.html',
  styleUrl: './books-show.component.css',
})
export class BooksSHowComponent implements OnInit {
  books: any = [];
  constructor(private bookDatas: BookDataService, private router: Router , private activeRout: ActivatedRoute) {}

  ngOnInit(): void {
    this.books = this.bookDatas.bookData;
  }
  priceChecker(price: number) {
    if (price > 50000) {
      return 'red';
    } else {
      return 'green';
    }
  }
  bgChecker(status: boolean) {
    if (status) {
      return '';
    } else {
      return 'gray';
    }
  }
}

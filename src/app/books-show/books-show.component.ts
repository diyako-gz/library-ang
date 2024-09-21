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
  constructor(
    private bookDatas: BookDataService,
    private router: Router,
    private activeRout: ActivatedRoute
  ) {}
  priceStatus: string = '';
  ngOnInit(): void {
    this.books = this.bookDatas.bookData;
  }
  priceChecker(price: number) {
    if (price > 50000) {
      this.priceStatus = 'higher'
      return 'red'
    } else {
      this.priceStatus = 'good'
      return 'green';
    }
  }
  bgChecker(status: any) {
    if (status == 'we have this book in store') {
      return '';
    } else {
      return 'gray';
    }
  }
  
}

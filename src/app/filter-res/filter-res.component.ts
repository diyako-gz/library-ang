import { Component, OnInit } from '@angular/core';
import { BookDataService } from '../book-data.service';

@Component({
  selector: 'app-filter-res',
  templateUrl: './filter-res.component.html',
  styleUrl: './filter-res.component.css',
})
export class FilterResComponent implements OnInit {
  constructor(private servisData: BookDataService) {}
  booksData: any = [];
  userSearch: string = '';
  priceStatus: string = ''
  ngOnInit(): void {
    this.booksData = this.servisData.bookData;
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

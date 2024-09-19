import { Component, OnInit } from '@angular/core';
import { BookDataService } from '../book-data.service';
import { FilterPipe } from '../filter-pipe.pipe';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  constructor(private bookData: BookDataService) {}

  bookDatas: any = '';
  userString :string = ''

  ngOnInit(): void {
    this.bookDatas = this.bookData.bookData;
  }
}

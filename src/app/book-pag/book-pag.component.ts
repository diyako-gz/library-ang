import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookDataService } from '../book-data.service';

@Component({
  selector: 'app-book-pag',
  templateUrl: './book-pag.component.html',
  styleUrl: './book-pag.component.css',
})
export class BookPagComponent implements OnInit {
  constructor(
    private activateRout: ActivatedRoute,
    private bookPagData: BookDataService
  ) {}
  public Id: number = 0;
  public showData: any = [];
  ngOnInit(): void {
    let selectedBook = parseInt(this.activateRout.snapshot.paramMap.get('id')!);
    this.Id = selectedBook;
    this.showData = this.bookPagData.bookData;
  }
  
}

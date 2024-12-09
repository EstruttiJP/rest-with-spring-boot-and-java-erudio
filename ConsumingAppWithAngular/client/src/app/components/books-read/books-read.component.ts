import { Router } from '@angular/router';
import { BooksService } from './../../services/books.service';
import { Component, OnInit } from '@angular/core';
import { Book } from '../../services/book.model';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-books-read',
  standalone: false,
  
  templateUrl: './books-read.component.html',
  styleUrl: './books-read.component.css'
})
export class BooksReadComponent implements OnInit {

  books: Book[] = [];
  displayedColumns = ['id', 'author', 'launchDate', 'price', 'title', 'action'];
  totalElements = 15;
  direction = 'asc';

  constructor(private booksService: BooksService, private router: Router){}

  ngOnInit(): void {
      this.readBooks();
  }

  pageSize = 5;
  pageIndex = 0;

  hidePageSize = false;
  showPageSizeOptions = false;
  disabled = false;

  pageEvent: PageEvent;

  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.totalElements = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
    this.readBooks();
  }

  createBook(){
    this.router.navigate(['books/create']);
  }

  readBooks(){
    this.booksService.read(this.pageIndex, this.pageSize, this.direction).subscribe(response => {
      this.books = response._embedded?.bookVOList || [];
      this.totalElements = response.page.totalElements;
    })
  }

}

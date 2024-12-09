import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BooksService } from '../../services/books.service';
import { Book } from '../../services/book.model';

@Component({
  selector: 'app-books-create',
  standalone: false,
  templateUrl: './books-create.component.html',
  styleUrl: './books-create.component.css'
})
export class BooksCreateComponent implements OnInit {
  
  book: Book;

  constructor(private booksService: BooksService,private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.booksService.readById(id).subscribe((book)=>{
      this.book = book;
    })
  }

  exit() {
    this.router.navigate(['/books'])
  }


}

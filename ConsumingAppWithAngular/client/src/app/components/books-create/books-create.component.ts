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
  
  book: Book = {
    author: '',
    launchDate: new Date().toISOString().replace('Z', ''),
    price: 0,
    title: ''
  };

  constructor(private booksService: BooksService,private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {}

  exit() {
    this.router.navigate(['/books'])
  }

  create(){
    this.booksService.create(this.book).subscribe(()=>{
      this.booksService.showMessage('Livro cadastrado com sucesso!');
      this.router.navigate(['/books'])
    });
  }

}

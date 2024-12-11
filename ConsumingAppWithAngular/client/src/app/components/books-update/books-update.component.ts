import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../services/books.service';
import { Book } from '../../services/book.model';

@Component({
  selector: 'app-books-update',
  standalone: false,
  templateUrl: './books-update.component.html',
  styleUrl: './books-update.component.css'
})
export class BooksUpdateComponent implements OnInit {
  
  book: Book;

  constructor(private booksService: BooksService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.booksService.readById(id).subscribe((book)=>{
      this.book = book;
    })
  }

  exit() {
    this.router.navigate(['/books'])
  }

  update() {
    this.booksService.update(this.book).subscribe(() => {
      this.booksService.showMessage("Livro atualizado com sucesso!");
      this.router.navigate(["/books"]);
    });
  }
}

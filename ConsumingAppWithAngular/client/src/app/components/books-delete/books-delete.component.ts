import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../../services/book.model';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-books-delete',
  standalone: false,
  templateUrl: './books-delete.component.html',
  styleUrl: './books-delete.component.css'
})
export class BooksDeleteComponent implements OnInit {
  
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

  deletar() {
    this.booksService.delete(this.book.id).subscribe(() => {
      this.booksService.showMessage("Livro excluido com sucesso!");
      this.router.navigate(["/books"]);
    });
  }

}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { BooksComponent } from './views/books/books.component';
import { NewBooksComponent } from './views/new-books/new-books.component';

const routes: Routes = [
  {
      path: "",
      component: LoginComponent
  },
  {
      path: "books",
      component: BooksComponent
  },
  {
      path: "books/new/:id",
      component: NewBooksComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

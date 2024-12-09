import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { BooksComponent } from './views/books/books.component';
import { BooksCreateComponent } from './components/books-create/books-create.component';
import { BooksUpdateComponent } from './components/books-update/books-update.component';
import { BooksDeleteComponent } from './components/books-delete/books-delete.component';
import { BooksReadComponent } from './components/books-read/books-read.component';

const routes: Routes = [
  {
    path: "",
    component: LoginComponent
  },
  {
    path: "books",
    component: BooksComponent,
    children: [
      {
        path: "",
        component: BooksReadComponent
      }, 
      {
        path: "create",
        component: BooksCreateComponent
      }, 
      {
        path: "update/:id",
        component: BooksUpdateComponent
      }, 
      {
        path: "delete/:id",
        component: BooksDeleteComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

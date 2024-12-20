import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from './auth.service';
import { User } from './user.model';
import { catchError, EMPTY, map, Observable } from 'rxjs';
import { Book, BookResponse } from './book.model';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private readonly baseUrlBook = "http://localhost:8080/api/book/v1"
  private readonly baseUrlAuth = "http://localhost:8080/auth/signin"

  
  constructor(private snackBar: MatSnackBar, private http: HttpClient, private authService: AuthService) {}

  private createHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Authorization': 'Bearer ' + this.authService.getToken(),
      'Content-Type': 'application/json'
    });
  }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "center",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"],
    });
  }

  signin(user: User): Observable<User> {
    console.table(user)
    return this.http.post<User>(this.baseUrlAuth, user).pipe(
      map((response) => {
        this.authService.setToken(response.accessToken, response.username);
      }),
      catchError((e) => this.errorHandler(e))
    );
  }

  read(page: number, size: number, direction: string): Observable<BookResponse> {
    const headers = this.createHeaders();
    return this.http.get<BookResponse>(this.baseUrlBook+'?page='+page+'&size='+size+'&direction='+direction, {headers}).pipe(
      map((response) => response),
      catchError((e) => this.errorHandler(e))
    );
  }

  readById(id: number): Observable<Book> {
    const headers = this.createHeaders();
    const url = `${this.baseUrlBook}/${id}`;
    
    return this.http.get<Book>(url, {headers}).pipe(
      map((response) => response),
      catchError((e) => this.errorHandler(e))
    );
    
  }

  delete(id: number): Observable<Book> {
    const headers = this.createHeaders();
    const url = `${this.baseUrlBook}/${id}`;
    
    return this.http.delete<Book>(url, {headers}).pipe(
      map((response) => response),
      catchError((e) => this.errorHandler(e))
    );
    
  }
  
  create(book: Book): Observable<Book> {
    const headers = this.createHeaders();
    return this.http.post<Book>(this.baseUrlBook, book, {headers}).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }
  
  update(book: Book): Observable<Book> {
    const headers = this.createHeaders();
    return this.http.put<Book>(this.baseUrlBook, book, {headers}).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    console.log(e)
    this.showMessage("Ocorreu um erro!: " + e.detail, true);
    return EMPTY;
  }
}

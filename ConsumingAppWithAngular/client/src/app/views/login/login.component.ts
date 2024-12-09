import { Component } from '@angular/core';
import { User } from '../../services/user.model';
import { FormControl, Validators } from '@angular/forms';
import { BooksService } from '../../services/books.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  user: User = {
    username: '',
    password: ''
  }
  username = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required, Validators.minLength(4)]);
  hide = true;
  errorMessage = '';
  acess = false;

  constructor(private bookService: BooksService, private router: Router){}

  updateErrorMessage() {
    if (this.username.hasError('required')) {
      this.errorMessage = 'você deve inserir um username';
      this.acess = false
    } else {
      this.errorMessage = '';
      this.acess = true
    }
    if (this.password.hasError('required')) {
      this.errorMessage = 'você deve inserir uma senha';
      this.acess = false
    } else if (this.password.hasError('minlength')) {
      this.errorMessage = 'Deve haver no minimo 4 caracteres';
      this.acess = false
    } else {
      this.errorMessage = '';
      this.acess = true
    }
  }

  signin() {
    this.user.username = this.username.value;
    this.user.password = this.password.value;
    this.bookService.signin(this.user).subscribe(()=>{
      this.bookService.showMessage('operação realizada com sucesso!');
      this.router.navigate(['/books'])
    })
  }
}

import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{

  username = ''

  constructor(private authService: AuthService){}

  ngOnInit(): void {
      this.username = this.authService.getUsername();
  }


}

import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/checkout/authantication/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private authService: AuthService, private router: Router){}

  ngOnInit(): void{
  }

  

}

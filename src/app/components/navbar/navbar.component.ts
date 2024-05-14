import { Component, Input, OnInit} from '@angular/core';
import { CartService } from 'src/app/Carts/cart.service';
import { AuthService } from 'src/app/services/checkout/authantication/auth.service';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent  implements OnInit{
navigateHome() {
throw new Error('Method not implemented.');
}
  cartItemCount: number = 0;
  isLoggedIn: boolean = false;
  router: any;

  constructor(private cartService: CartService,
              private authService: AuthService) {}
  

  ngOnInit() {
    this.cartService.getCartItemCount().subscribe((count: number) => {
      this.cartItemCount = count;
     });
     this.isLoggedIn = this.authService.getIsLoggedIn();

   
    }
  
    logout() {
      this.authService.logout(); 
      this.isLoggedIn = false; 
      this.router.navigate(['/home']);
      
    }
  }

  


import { Component, HostListener, Input, OnInit} from '@angular/core';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/Carts/cart.service';
import { EventBusService } from 'src/app/event-bus.service';
import { AuthService } from 'src/app/services/checkout/authantication/auth.service';
import { StorageService } from 'src/app/storage.service';




@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent  implements OnInit{
username?: string;
showAdminBoard = false;
private roles: string[] = [];
showSupplierBoard= false;
eventBusSub?: Subscription;

navigateHome() {
throw new Error('Method not implemented.');
}
  cartItemCount: number = 0;
  isLoggedIn: boolean = false;
  router: any;

  constructor(private cartService: CartService,
              private authService: AuthService, private storageService: StorageService,   private eventBusService: EventBusService) {}
  

  ngOnInit() {
    // this.cartService.getCartItemCount().subscribe((count: number) => {
    //   this.cartItemCount = count;
    //  });
   this.isLoggedIn= this.storageService.isLoggedIn();
    this.cartItemCount = this.cartService.getCartItemCount();
    
    if (this.isLoggedIn) {
      const user = this.storageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showSupplierBoard = this.roles.includes('ROLE_SUPPLIER');

      this.username = user.username;
    }
    this.eventBusSub = this.eventBusService.on('logout', () => {
      this.logout();
    });

    console.log(this.isLoggedIn);
  }
   
    
  
 
  logout(): void {
    this.authService.logout().subscribe({
      next: res => {
        console.log(res);
        window.sessionStorage.clear();
        localStorage.clear()
        this.storageService.clean();
        this.router('/home')
   window.location.reload();
      },
      error: err => {
        console.log(err);
      }
    });
  }
}

  

  


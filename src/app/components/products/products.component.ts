import { Component } from '@angular/core';
import { ProductsService } from 'src/app/APIs/products.service';
import { CartService } from 'src/app/Carts/cart.service';
import { AuthService } from 'src/app/services/checkout/authantication/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})



export class ProductsComponent {

  constructor(private productsService: ProductsService, private cartService: CartService, private authService: AuthService, private router: Router) { }

  products: any[] = [];


  ngOnInit() {
    // this.addProduct();
    this.productsService.getProducts().subscribe((response) => {
      this.products = response;
      console.log(this.products)
    })

  }

  checkIfLogged(product: any) {
    if (!this.authService.getIsLoggedIn()) {

      this.router.navigate(['/login']);
    }
    else{
      this.addToCart(product)
    }

  }

  addToCart(product: any) {
    this.cartService.addTocart(product);
  }
}


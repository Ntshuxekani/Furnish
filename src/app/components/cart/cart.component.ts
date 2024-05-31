import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ProductsService } from 'src/app/APIs/products.service';
import { CartService } from 'src/app/Carts/cart.service';
import { AuthService } from 'src/app/services/checkout/authantication/auth.service';
import { ShoppingCart } from 'src/app/interface/shoppingCart';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  products: any[] = [];
  subTotal: any = 0;
  totalQuantity: any = 0;
  
  constructor(
    private productservice: ProductsService,
    private cartService: CartService,
    private authService: AuthService,
     private router: Router
    
  ) {}

  ngOnInit(): void {
    const cItems = localStorage.getItem("cartItems")
    if(cItems){
      this.products = this.cartService.getCart();
      this.updateTotalQuantity()
      this.updateTotal();
      
    }
    if (!this.authService.getIsLoggedIn()) {

      this.router.navigate(['/cart']);
    }
    // this.subTotal = this.cartService.getTotalPrice();
  }

  
  addToCart(product: any) {
    this.products.push(product);
  }

  getCart() {
    
    return this.products;
  }

  updateTotal() {
    this.subTotal = this.products.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
  }

  updateTotalQuantity() {
    this.subTotal = this.products.reduce((acc, item) => acc + item.quantity, 0);
  }

  increaseQuantity(item: { quantity: number }) {
    item.quantity++;
    this.updateTotal();
    // this.updateTotalQuantity()
  }

  decreaseQuantity(item: { quantity: number }) {
    if (item.quantity > 1) {
      item.quantity--;
      this.updateTotal();
      // this.updateTotalQuantity()
    }
  }

  removeItem(index: any) {
    const removedItem = this.products.splice(index, 1)[0];
    this.subTotal -= removedItem.price * removedItem.quantity;
    // Decrease the cart item count
    this.cartService.cartItemCount.next(this.cartService.cartItemCount.value - removedItem.quantity);
    // this.updateTotalQuantity();

  }

}

// ########### ON HOLD CODE ##############
// if (!this.cartService.productInCart(product)) {
//   product.quantity = 1;
//   this.cartService.addToCart(product);
//   this.products = [...this.cartService.getProduct()];
//   this.subTotal = product.price;
// }

// get total(){
//   return this.products?.reduce(
//     (sum, product) => ({
//       quantity: 1,
//       price: sum.price + product.quantity * product.price,
//     }),
//     { quantity: 1, price: 0 }
//   ).price;
// }

// this.cartService.getProductData()
//   .subscribe(res=>{
//   this.products = res;
//
//   })
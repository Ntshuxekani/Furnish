import { Component } from '@angular/core';
import { ProductsService } from 'src/app/APIs/products.service';
import { CartService } from 'src/app/Carts/cart.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})



export class ProductsComponent {
  
  constructor(private productsService: ProductsService, private cartService:CartService ){}
  
  products: any[] = [];
    

  ngOnInit(){
    // this.addProduct();
    this.productsService.getProducts().subscribe((response) =>{
      this.products = response;
      console.log(this.products)
    })
    
  }

    addToCart(product: any) {
      this.cartService.addTocart(product);
    }
  }


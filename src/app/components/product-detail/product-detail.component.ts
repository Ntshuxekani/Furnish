import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params} from '@angular/router';
import { ProductsService } from 'src/app/APIs/products.service';
import { } from '../products/products.component'
import { CartService } from 'src/app/Carts/cart.service';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit{
  productId: any;

  constructor(private activatedRoute: ActivatedRoute, private productsService: ProductsService, private cartService: CartService){

  }
  product: any  = [];
  ngOnInit(): void {

     this.activatedRoute.paramMap.subscribe((params: ParamMap) =>{
      this.productsService.getProduct(+params.get('id')!).subscribe((response: any)=>{
        this.product.push(response);
        console.log(this.product)
      })
     })
    //  this.activatedRoute.paramMap.subscribe((params: ParamMap)=>{
    //  this.productsService.getProductById(+params.get('id')!).subscribe((response: any)=>{
    //     console.log(response);
    //   })
     //})

  }
    addToCart(product: any) {
      this.cartService.addTocart(product);
    }
}

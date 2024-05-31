import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor() { }

  // set the cart item in localstorage
  setCartItem(product: any, value: any){
    localStorage.setItem(product, value)
    console.log(value)
  }

  // get the item from the local storage
  getItem(product: any){
    return localStorage.getItem(product)
  }

  // remove item from local storage
  removeItem(product: any): void {
    localStorage.removeItem(product)
  }

  // clear all items from localstorage/cart
  clearAll(): void {
    localStorage.clear()
  }

  
}
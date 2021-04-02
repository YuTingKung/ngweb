import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
  })
export class CartService {
  items = [];

  addToCart(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    let baseHref =  (document.querySelector('base') || {}).href;
    return this.http.get(baseHref + '/assets/shipping.json');
  }
  constructor(
    private http: HttpClient
  ) { }

}
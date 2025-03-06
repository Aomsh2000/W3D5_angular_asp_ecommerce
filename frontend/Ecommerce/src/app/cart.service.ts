// cart.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: any[] = []; // Cart items will be stored here

  constructor() { }

  // Add item to the cart
  addToCart(product: any): void {
    const existingProductIndex = this.cartItems.findIndex(item => item.id === product.id);
    if (existingProductIndex >= 0) {
      // If product already in cart, increase the quantity
      this.cartItems[existingProductIndex].quantity += 1;
    } else {
      // If product is not in cart, add it
      this.cartItems.push({...product, quantity: 1});
    }
  }

  // Get cart items
  getCartItems(): any[] {
    return this.cartItems;
  }

  // Remove item from the cart
  removeFromCart(productId: number): void {
    this.cartItems = this.cartItems.filter(item => item.id !== productId);
  }

  // Clear the cart
  clearCart(): void {
    this.cartItems = [];
  }

  // Get total count of items in the cart
  getTotalItemsCount(): number {
    return this.cartItems.reduce((total, item) => total + item.quantity, 0);
  }

  // Get total price of items in the cart
  getTotalPrice(): number {
    return this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  }
}

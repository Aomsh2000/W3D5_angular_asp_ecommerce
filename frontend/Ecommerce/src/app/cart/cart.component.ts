// cart.component.ts
import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-cart',
  imports:[CommonModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];
  totalItems: number = 0;
  totalPrice: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
    this.totalItems = this.cartService.getTotalItemsCount();
    this.totalPrice = this.cartService.getTotalPrice();
  }

  // Remove item from cart
  removeFromCart(productId: number): void {
    this.cartService.removeFromCart(productId);
    this.updateCart();
  }

  // Clear the cart
  clearCart(): void {
    this.cartService.clearCart();
    this.updateCart();
  }

  // Update cart details
  private updateCart(): void {
    this.cartItems = this.cartService.getCartItems();
    this.totalItems = this.cartService.getTotalItemsCount();
    this.totalPrice = this.cartService.getTotalPrice();
  }
}

import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';  // Import ProductService
import {CartService} from '../cart.service';
import { Router } from '@angular/router';  // Import Router for navigation to product details
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-product-list',
  imports:[CommonModule,RouterOutlet,RouterLink],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: any[] = [];  // To hold the list of products
  errorMessage: string = '';  // To display any errors if fetching data fails

  constructor(private productService: ProductService,
     private router: Router,
     private cartService: CartService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data =>
        {
          this.products=data;
        },
      (error) => {
        this.errorMessage = 'Error fetching product data';  // Handle any errors
        console.error(error);
      }
    );
  }

  // Add product to cart
  addToCart(product: any): void {
    this.cartService.addToCart(product);
  }
}

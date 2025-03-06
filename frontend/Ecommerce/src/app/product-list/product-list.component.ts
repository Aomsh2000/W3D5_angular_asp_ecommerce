import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';  // Import ProductService
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

  constructor(private productService: ProductService, private router: Router) { }

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

  // Method to navigate to product details page
 /*  viewProductDetails(productId: number): void {
    this.router.navigate(['/product-details', productId]);  // Navigate to product details page with the product ID
  } */
}

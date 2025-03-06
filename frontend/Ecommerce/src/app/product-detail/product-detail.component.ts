import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';  // Make sure the service is imported

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: any = {};  // Variable to store product details
  productId: string | null = null;

  constructor(
    private route: ActivatedRoute, 
    private productService: ProductService  // Inject the service to fetch product data
  ) {}

  ngOnInit(): void {
    // Fetch product ID from the route parameters
    this.productId = this.route.snapshot.paramMap.get('id');
    if (this.productId) {
      // Call the service to get product details
      this.productService.getProductDetails(this.productId).subscribe(data => {
        this.product = data;  // Store fetched data
      });
    }
  }
}

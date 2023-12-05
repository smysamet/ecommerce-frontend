import { Component } from '@angular/core';
import { ProductDetails } from '../product-details';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products-grid',
  templateUrl: './products-grid.component.html',
  styleUrls: ['./products-grid.component.css'],
})
export class ProductsGridComponent {
  products: ProductDetails[] = [];
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productService
      .getProducts()
      .subscribe((response) => (this.products = response.data));
  }
}

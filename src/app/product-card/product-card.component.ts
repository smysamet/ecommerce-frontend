import { Component, Input } from '@angular/core';
import { ProductDetails } from '../product-details';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent {
  @Input() productDetails?: ProductDetails;
}

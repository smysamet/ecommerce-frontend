import { Injectable } from '@angular/core';
import { ProductDetails } from '../product-details';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GetProductsResponse } from '../get-products-response';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private produtApiUrl = 'http://localhost:8080/api/products';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<GetProductsResponse> {
    return this.http.get<GetProductsResponse>(this.produtApiUrl);
  }
}

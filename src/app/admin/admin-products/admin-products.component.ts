import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/products.service';
import { Observable } from 'rxjs';
import { ShoppingCartService } from 'src/app/shopping-cart.service';
import { Products } from 'src/app/models/products';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {

  products$: Observable<any[]>;

  constructor(private productService: ProductsService, private cartService: ShoppingCartService) {
    this.products$ = this.productService.getAll();
   }

  ngOnInit() {
  }

  addToCart(product: Products){
    this.cartService.addToCart(product);
  }
}

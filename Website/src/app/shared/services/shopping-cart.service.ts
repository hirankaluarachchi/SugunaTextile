import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Products } from '../models/products';
import { take, map } from 'rxjs/operators';
import { Observable, pipe } from 'rxjs';
import { ShoppingCart } from '../models/shopping-cart';
import { ShoppingCartItem } from '../models/shopping-cart-item';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  constructor(private db: AngularFireDatabase) { }

  async getCart(): Promise<Observable<ShoppingCart>>{
    let cartId = await this.getOrCreateCartId();
    return this.db.object('/shopping-carts/'+ cartId).valueChanges().pipe(map(({items}) => new ShoppingCart(items)));
  }
  
  async removeFromCart(product: Products) {
    this.updateItem(product, -1);
  }

  async addToCart(product: Products) { 
    this.updateItem(product, 1);
  }

  async clearCart() { 
    let cartId = await this.getOrCreateCartId();
    this.db.object('/shopping-carts/' + cartId + '/items').remove();
  }

  private create() {
    return this.db.list('/shopping-carts').push({
      dateCreated: new Date().getTime(),
    });
  }

  private getItem(cartId: string, productId: string){
    return this.db.object('/shopping-carts/' + cartId + '/items/' + productId);
  }

  private async updateItem(product : Products, change: number) {
    let cartId = await this.getOrCreateCartId();
    let item$ = this.getItem(cartId, product.key || product.$key);
    item$.valueChanges().pipe(take(1)).subscribe((items : ShoppingCartItem) =>{
      if(items != null){
        let quantity = ( items.quantity || 0 ) + change;
        if (quantity === 0) item$.remove();
        else item$.update({ 
          title: product.title,
          imageUrl: product.imageUrl,
          price: product.price,
          quantity: quantity});
      }
      else{
        item$.update({
          title: product.title,
          imageUrl: product.imageUrl,
          price: product.price,
          quantity: 1
        })
      }
      
    })
  }

  private async getOrCreateCartId(){
      let cartId = localStorage.getItem('cartId');
      if(cartId) return cartId;

      let result = await this.create();
      localStorage.setItem('cartId', result.key);
      return result.key;
      
  }

}

import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  
  constructor(public db: AngularFireDatabase) { 
    
  }  
  
  create(product: any) {
    return this.db.list('/products').push(product);
  }
  
  getAll() {
    return this.db.list('/products').valueChanges();
  }
  
}


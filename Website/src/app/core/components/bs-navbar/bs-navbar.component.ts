import { Component, OnInit} from '@angular/core';
import { AuthService } from '../../../shared/services/auth.service';
import { Appuser } from '../../../shared/models/app-user';
import { Router } from '@angular/router';
import { ShoppingCartService } from '../../../shared/services/shopping-cart.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Observable } from 'rxjs';
import { ShoppingCart } from '../../../shared/models/shopping-cart';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit{

  appUser: Appuser;
  cart$: Observable<ShoppingCart>;

  constructor(private auth: AuthService, private router: Router, private shoppingcartService: ShoppingCartService) {
    
   }

   async ngOnInit(){
    this.auth.appUsers$.subscribe(appUser => this.appUser = appUser);

    this.cart$ = (await this.shoppingcartService.getCart());
   }

   logout() {
    this.auth.logout();
    window.location.reload()
  }

}

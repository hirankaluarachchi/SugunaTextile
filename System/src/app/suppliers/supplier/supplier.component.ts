import { OrderTypesService } from './../../shared/order-types.service';
import { Component, OnInit } from '@angular/core';
import { SuppliersService } from "../../shared/suppliers.service";

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit {

  constructor(public service: SuppliersService) { }

OrderTypes = [
  {id: 3, value : 'Order Type 1'},
  {id: 2, value : 'Order Type 2'},
  {id: 1, value : 'Order Type 3'}
]

  ngOnInit(): void {
    
  }

  onClear() {
    this.service.form.reset();
    

  }

  demo(){

    this.service.form.setValue({
  
      $key:null,
        supName:'Shadini',
        compName:'ShaFashion',
        email:'shadinikalansooriya98@gmail.com',
        mobile:'0763792769',
        address:'Diloma, Aththalapitiya Road Bandarawela',
        oType:0,
    
    })
  }

}
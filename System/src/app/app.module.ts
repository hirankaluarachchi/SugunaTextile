import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule  } from "@angular/platform-browser/animations";
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AppRoutingModule } from './app-routing.module';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { AppComponent } from './app.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { SupplierComponent } from './suppliers/supplier/supplier.component';
import { SuppliersService } from './shared/suppliers.service';
import { environment } from "../environments/environment";
import { OrderTypesService } from "./shared/order-types.service";
import { ProductService } from './shared/product.service';

import { SupplierListComponent } from './suppliers/supplier-list/supplier-list.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeComponent } from './employees/employee/employee.component';

import { DatePipe } from '@angular/common';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { DepartmentService } from './shared/department.service';
import { MatConfirmDialogComponent } from './mat-confirm-dialog/mat-confirm-dialog.component';
import { TailoringsComponent } from './tailorings/tailorings.component';
import { TailoringComponent } from './tailorings/tailoring/tailoring.component';

import { SuppliesComponent } from './suppliers/supplies/supplies.component';
import { SuppliesService } from "./shared/supplies.service";
import { TailoringService } from "./shared/tailoring.service";
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './products/product/product.component';
import { ProductListComponent } from './products/product-list/product-list.component';

import { SupplyComponent } from './suppliers/supplies/supply/supply.component';
import { MatSliderModule } from '@angular/material/slider';
import {MatExpansionModule} from '@angular/material/expansion';
import { ProductStockComponent } from './products/product-stock/product-stock.component';
import { ProductStockListComponent } from './products/product-stock-list/product-stock-list.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderService } from './shared/order.service';

import { UploadComponent } from './suppliers/supplies/supply/upload/upload.component';

import { TailoringListComponent } from './tailorings/tailoring-list/tailoring-list.component'

import { OrderReportComponent } from './orders/order-report/order-report.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
   declarations: [
      AppComponent,
      SuppliersComponent,
      SupplierComponent,
      ProductsComponent,
      ProductComponent,
      
      SupplierListComponent,
      EmployeesComponent,
      EmployeeComponent,
      EmployeeListComponent,
    
      MatConfirmDialogComponent,
      TailoringsComponent,
      TailoringComponent,
   
      SuppliesComponent,
      ProductListComponent,
    
      SupplyComponent,
      ProductStockComponent,
      ProductStockListComponent,
      OrdersComponent,
      OrderReportComponent,
    
      UploadComponent,
     
      TailoringListComponent
   ],
   imports: [
      BrowserModule,
      MatSliderModule,
      AppRoutingModule,
      MatProgressSpinnerModule,
      MatProgressBarModule,
      MaterialModule,
      FormsModule,
      MatDialogModule,
      ReactiveFormsModule,
      BrowserAnimationsModule,
      AngularFireDatabaseModule,
      AngularFireModule.initializeApp(environment.firebaseConfig),
      MatExpansionModule,
      AngularFireModule.initializeApp(environment.firebaseConfig)
   ],
   providers: [
      SuppliersService,
      OrderTypesService,
      ProductService,
  
      DatePipe,
      SuppliesService,
      TailoringService,
      OrderService,
      
   ],
   bootstrap: [
      AppComponent
   ],
   entryComponents: [
      SupplierComponent,
      ProductComponent,
      EmployeeComponent,
  
      MatConfirmDialogComponent,
 
      SupplyComponent,
      ProductStockComponent,
      ProductStockListComponent,
      UploadComponent,
   
      TailoringComponent
   ]
})
export class AppModule { }
  
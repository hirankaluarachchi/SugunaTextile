import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { SupplierComponent } from './suppliers/supplier/supplier.component';
import { SuppliersService } from './shared/suppliers.service';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule  } from "@angular/platform-browser/animations";
import { MatSliderModule } from '@angular/material/slider';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import {MatExpansionModule} from '@angular/material/expansion';
import { environment } from "../environments/environment";
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeComponent } from './employees/employee/employee.component';
import { DepartmentService } from './shared/department.service';
import { EmployeeService } from './shared/employee.service';
import { NotificationService } from './shared/notification.service';
import { StockService } from 'src/app/shared/stock.service';
import { DatePipe } from '@angular/common';
import { SupplierListComponent } from './suppliers/supplier-list/supplier-list.component';
import {ProductService } from './shared/product.service';
import {MatDialogRef} from '@angular/material/dialog';
import { OrderTypesService } from "./shared/order-types.service";
import { MatConfirmDialogComponent } from './mat-confirm-dialog/mat-confirm-dialog.component';
import { ProductComponent } from 'src/app/products/product/product.component';
import { ProductsComponent } from './products/products.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductStockComponent } from './products/product-stock/product-stock.component';
import { ProductStockListComponent } from './products/product-stock-list/product-stock-list.component';
import { TailoringsComponent } from './tailorings/tailorings.component';
import { TailoringComponent } from './tailorings/tailoring/tailoring.component';
import { TailoringListComponent } from './tailorings/tailoring-list/tailoring-list.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderService } from './shared/order.service';
import { OrderReportComponent } from './orders/order-report/order-report.component';


@NgModule({
  declarations: [
    AppComponent,
    SuppliersComponent,
    SupplierComponent,
    SupplierListComponent,
    EmployeeListComponent,
    EmployeesComponent,
    EmployeeComponent,
    MatConfirmDialogComponent,
    ProductComponent,
    ProductsComponent,
    ProductListComponent,
    ProductStockComponent,
    ProductStockListComponent,
    TailoringsComponent,
    TailoringComponent,
    TailoringListComponent,
    OrdersComponent,
    OrderReportComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatProgressSpinnerModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatDialogModule,
    MatProgressBarModule,
    AngularFireDatabaseModule,
    MatDialogModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    MatExpansionModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [
    ProductService,
    SuppliersService,
    DepartmentService,
    EmployeeService,
    NotificationService,
    DatePipe,
    StockService,
    SuppliersService,
    OrderService,
    OrderTypesService, {
    provide: MatDialogRef,
    useValue: {}
  }],
  bootstrap: [AppComponent],
  entryComponents: [ SupplierComponent,MatConfirmDialogComponent]

})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CustomersComponent } from './customers/customers.component';
import { customerRoutes } from './customer.routes';
import { MaterialModules, SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(customerRoutes),
    MaterialModules,
    SharedModule
  ],
  declarations: [
    CustomersComponent
  ]
})
export class CustomerModule { }

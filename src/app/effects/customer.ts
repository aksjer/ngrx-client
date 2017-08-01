import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import * as fromCustomer from '../actions/customer';
import * as fromLayout from '../actions/layout';
import { Customer } from '../models/customer';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { CustomerService } from '../services/customer.service';
import { CUSTOMER_SEARCH, CustomerAddSuccessAction } from '../actions/customer';
import { MySnackBar, MySnackBarAction } from '../models/my-snackbar';

@Injectable()
export class CustomerEffects {

  constructor(
    private _action$: Actions,
    private _customerService: CustomerService
  ) { }

  @Effect()
  customerLoad$: Observable<Action> = this._action$
    .ofType(fromCustomer.CUSTOMER_LOAD)
    .switchMap(() => this._customerService.getAll())
    .map((customers: Customer[]) =>
      new fromCustomer.CustomerLoadSuccessAction(
        {
          snackbar: new MySnackBar(true, 'Load success',
            new MySnackBarAction('Load', () => console.log('hehe')), 2000), payload: customers
        }));

  @Effect()
  customerSearch$: Observable<Action> = this._action$
    .ofType(fromCustomer.CUSTOMER_SEARCH)
    .map(toPayload)
    .switchMap((term: string) => this._customerService.search(term))
    .map((customers: Customer[]) =>
      new fromCustomer.CustomerSearchSuccessAction(
        {
          snackbar: new MySnackBar(true, 'Search success',
            new MySnackBarAction('Search', () => console.log('ghfb')), 1000), payload: customers
        }));

  @Effect()
  customerAdd$: Observable<Action> = this._action$
    .ofType(fromCustomer.CUSTOMER_ADD)
    .map(toPayload)
    .switchMap((customer: Customer) => this._customerService.post(customer))
    .map((customers: Customer[]) => new fromCustomer.CustomerAddSuccessAction(
      {
        snackbar: new MySnackBar(true, 'Add success',
          new MySnackBarAction('Add', () => console.log('jdsbfgd'))), payload: customers
      }));

}

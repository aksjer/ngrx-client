import { Action } from '@ngrx/store';
import { Customer } from '../models/customer';
import { ActionSuccess } from '../models/action-success';

export const CUSTOMER_LOAD = '[Customer] Load';
export const CUSTOMER_LOAD_SUCCESS = '[Customer] Load Success';
export const CUSTOMER_SEARCH = '[Customer] Search';
export const CUSTOMER_SEARCH_SUCCESS = '[Customer] Search Success';
export const CUSTOMER_ADD = '[Customer] Add';
export const CUSTOMER_ADD_SUCCESS = '[Customer] Add Success';

export class CustomerLoadAction implements Action {
  readonly type = CUSTOMER_LOAD;
}

export class CustomerLoadSuccessAction implements Action {
  readonly type = CUSTOMER_LOAD_SUCCESS;
  constructor(public payload: ActionSuccess) { }
}

export class CustomerSearchAction implements Action {
  readonly type = CUSTOMER_SEARCH;
  constructor(public payload: string) { }
}

export class CustomerSearchSuccessAction implements Action {
  readonly type = CUSTOMER_SEARCH_SUCCESS;
  constructor(public payload: ActionSuccess) { }
}

export class CustomerAddAction implements Action {
  readonly type = CUSTOMER_ADD;
  constructor(public payload: Customer) { }
}

export class CustomerAddSuccessAction implements Action {
  readonly type = CUSTOMER_ADD_SUCCESS;
  constructor(public payload: ActionSuccess) { }
}

export type Actions = CustomerLoadAction
  | CustomerLoadSuccessAction
  | CustomerSearchAction
  | CustomerSearchSuccessAction
  | CustomerAddAction
  | CustomerAddSuccessAction;

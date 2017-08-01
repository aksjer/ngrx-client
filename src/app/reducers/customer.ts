import { Customer } from '../models/customer';
import * as fromCustomer from '../actions/customer';
import { CUSTOMER_ADD_SUCCESS } from '../actions/customer';

export interface State {
  customers: Customer[];
}

const initialState: State = {
  customers: []
};

export function reducer(state: State = initialState, action: fromCustomer.Actions): State {
  switch (action.type) {
    case fromCustomer.CUSTOMER_LOAD:
      return Object.assign({}, state, { customers: [] });
    case fromCustomer.CUSTOMER_SEARCH:
      return Object.assign({}, state, { customers: [] });
    case fromCustomer.CUSTOMER_LOAD_SUCCESS:
    case fromCustomer.CUSTOMER_SEARCH_SUCCESS:
    case fromCustomer.CUSTOMER_ADD_SUCCESS:
      return Object.assign({}, state, { customers: action.payload.payload });
    default:
      return state;
  }
}

export const getCustomers = (state: State): Customer[] => state.customers;

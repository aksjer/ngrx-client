import { createSelector } from 'reselect';
import * as fromLayout from './layout';
import * as fromCustomer from './customer';

export interface State {
  layout: fromLayout.State;
  customer: fromCustomer.State;
}

export const reducers = {
  layout: fromLayout.reducer,
  customer: fromCustomer.reducer
};

export const getLayoutState = (state: State): fromLayout.State => state.layout;
export const getLayoutSidenav = createSelector(getLayoutState, fromLayout.getLayoutSidenav);
export const getLayoutLoadingBar = createSelector(getLayoutState, fromLayout.getLayoutLoadingBar);
export const getLayoutDialog = createSelector(getLayoutState, fromLayout.getLayoutDialog);
export const getLayoutSnackBar = createSelector(getLayoutState, fromLayout.getLayoutSnackBar);

export const getCustomerState = (state: State): fromCustomer.State => state.customer;
export const getCustomers = createSelector(getCustomerState, fromCustomer.getCustomers);

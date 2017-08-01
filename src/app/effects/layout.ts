import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import * as fromCustomer from '../actions/customer';
import * as fromLayout from '../actions/layout';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import { CUSTOMER_ADD_SUCCESS } from '../actions/customer';
import { DialogCloseAction } from '../actions/layout';
import { MySnackBar } from '../models/my-snackbar';
import { ActionSuccess } from '../models/action-success';

@Injectable()
export class LayoutEffects {

  constructor(
    private _action$: Actions,
  ) { }

  @Effect()
  loadOn$: Observable<Action> = this._action$
    .ofType(fromCustomer.CUSTOMER_LOAD, fromCustomer.CUSTOMER_SEARCH, fromCustomer.CUSTOMER_ADD)
    .map(() => new fromLayout.LoadingBarOnAction());

  @Effect()
  loadOff$: Observable<Action> = this._action$
    .ofType(fromCustomer.CUSTOMER_LOAD_SUCCESS, fromCustomer.CUSTOMER_SEARCH_SUCCESS, fromCustomer.CUSTOMER_ADD_SUCCESS)
    .map(toPayload)
    .mergeMap((actionSuccess: ActionSuccess) => [
      new fromLayout.LoadingBarOffAction(),
      new fromLayout.SnackBarOpenAction(actionSuccess.snackbar)
    ]);

  @Effect()
  dialogClose$: Observable<Action> = this._action$
    .ofType(fromCustomer.CUSTOMER_ADD_SUCCESS)
    .map(() => new fromLayout.DialogCloseAction());

}

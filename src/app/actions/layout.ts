import { Action } from '@ngrx/store';
import { Component } from '@angular/core';
import { MySnackBar } from '../models/my-snackbar';

export const SIDENAV_OPEN = '[Sidenav] Open';
export const SIDENAV_CLOSE = '[Sidenav] Close';
export const LOADINGBAR_ON = '[LoadingBar] On';
export const LOADINGBAR_OFF = '[LoadingBar] Off';
export const DIALOG_OPEN = '[Dialog] Open';
export const DIALOG_CLOSE = '[Dialog] Close';
export const SNACKBAR_OPEN = '[SnackBar] Open';
export const SNACKBAR_CLOSE = '[SnackBar] Close';

export class SidenavOpenAction implements Action {
  readonly type = SIDENAV_OPEN;
}

export class SidenavCloseAction implements Action {
  readonly type = SIDENAV_CLOSE;
}

export class LoadingBarOnAction implements Action {
  readonly type = LOADINGBAR_ON;
}

export class LoadingBarOffAction implements Action {
  readonly type = LOADINGBAR_OFF;
}

export class DialogOpenAction implements Action {
  readonly type = DIALOG_OPEN;
  constructor(public payload: any) { }
}

export class DialogCloseAction implements Action {
  readonly type = DIALOG_CLOSE;
}

export class SnackBarOpenAction implements Action {
  readonly type = SNACKBAR_OPEN;
  constructor(public payload: MySnackBar) { }
}

export class SnackBarCloseAction implements Action {
  readonly type = SNACKBAR_CLOSE;
}

export type Actions = SidenavOpenAction
  | SidenavCloseAction
  | LoadingBarOnAction
  | LoadingBarOffAction
  | DialogOpenAction
  | DialogCloseAction
  | SnackBarOpenAction
  | SnackBarCloseAction;

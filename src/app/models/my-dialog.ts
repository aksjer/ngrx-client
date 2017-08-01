import { Component } from '@angular/core';

export interface MyDialog {
  opened: boolean;
  component: any;
}

export interface MyDialogActions {
  cancel();
  valid();
}

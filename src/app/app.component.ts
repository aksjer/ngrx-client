import { Component, OnInit } from '@angular/core';
import { SidenavItem } from './models/sidenav';
import * as fromRoot from './reducers';
import * as fromLayout from './actions/layout';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { MdDialog, MdSnackBar } from '@angular/material';
import { MyDialog } from './models/my-dialog';
import { CustomerAddComponent } from './dialog-components/customer-add/customer-add.component';
import { MySnackBar } from './models/my-snackbar';
import { SnackBarCloseAction } from './actions/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  sidenavItems: SidenavItem[] = [
    { text: 'Dashboard', path: '/dashboard' },
    { text: 'Customer', path: '/customer' }
  ];
  sidenavOpened$: Observable<boolean>;
  loading$: Observable<boolean>;

  constructor(
    private _store: Store<fromRoot.State>,
    private _mdDialog: MdDialog,
    private _mdSnackBar: MdSnackBar
  ) { }

  ngOnInit() {
    this.sidenavOpened$ = this._store.select(fromRoot.getLayoutSidenav);
    this.loading$ = this._store.select(fromRoot.getLayoutLoadingBar);
    this._store.select(fromRoot.getLayoutDialog)
      .subscribe((dialog: MyDialog) => {
        if (dialog.opened) {
          this._mdDialog
            .open(dialog.component)
            .afterClosed()
            .subscribe(() => this._store.dispatch(new fromLayout.DialogCloseAction()));
        } else {
          this._mdDialog.closeAll();
        }
      });
    this._store.select(fromRoot.getLayoutSnackBar)
      .subscribe((snackbar: MySnackBar) => {
        if (snackbar.opened) {
          const ref = this._mdSnackBar.open(snackbar.message, snackbar.action.text, { duration: snackbar.duration });
          ref.onAction().subscribe(() => snackbar.action.action());
          ref.afterDismissed().subscribe(() => this._store.dispatch(new fromLayout.SnackBarCloseAction()));
        }
      });

  }

  sidenavOpen() {
    this._store.dispatch(new fromLayout.SidenavOpenAction());
  }

  sidenavClose() {
    this._store.dispatch(new fromLayout.SidenavCloseAction());
  }


}

import { Component, OnInit } from '@angular/core';
import * as fromRoot from '../../reducers';
import * as fromCustomer from '../../actions/customer';
import * as fromLayout from '../../actions/layout';
import { Store } from '@ngrx/store';
import { MdDialog } from '@angular/material';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent implements OnInit {

  constructor(
    private _store: Store<fromRoot.State>,
  ) { }

  ngOnInit() { }

  valid() {
    this._store.dispatch(new fromCustomer.CustomerAddAction({ id: 4, name: 'xx' }));
  }

  cancel() {
    this._store.dispatch(new fromLayout.DialogCloseAction());
  }

}

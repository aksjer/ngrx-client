import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../reducers';
import * as fromCustomer from '../../actions/customer';
import * as fromLayout from '../../actions/layout';
import { Observable } from 'rxjs/Observable';
import { Customer } from '../../models/customer';
import { CustomerAddComponent } from '../../dialog-components/customer-add/customer-add.component';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  customers$: Observable<Customer[]>;

  constructor(
    private _store: Store<fromRoot.State>
  ) { }

  ngOnInit() {
    this.customers$ = this._store.select(fromRoot.getCustomers);
    this._store.dispatch(new fromCustomer.CustomerLoadAction());
  }

  search(term: string) {
    this._store.dispatch(new fromCustomer.CustomerSearchAction(term));
  }

  add() {
    this._store.dispatch(new fromLayout.DialogOpenAction(CustomerAddComponent));
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Customer } from '../models/customer';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';

@Injectable()
export class CustomerService {

  fakeDelay = 1500;

  constructor(
    private _httpClient: HttpClient
  ) { }

  fakeCustomers: Customer[] = [
    { id: 1, name: 'bob' },
    { id: 2, name: 'jak' },
    { id: 3, name: 'mo' }
  ];

  getAll(): Observable<Customer[]> {
    // this._httpClient
    // .get<Customer[]>()
    return Observable
      .of(this.fakeCustomers)
      .delay(this.fakeDelay);
  }

  get(id: number): Observable<Customer[]> {
    return Observable
      .of(this.fakeCustomers)
      .map((customers: Customer[]) => customers.filter(c => c.id === id));
  }

  search(term: string) {
    return Observable
      .of(this.fakeCustomers)
      .map((customers: Customer[]) => customers.filter(c => c.name.toLowerCase().includes(term.toLowerCase())))
      .delay(this.fakeDelay);
  }

  post(customer: Customer): Observable<Customer[]> {
    return Observable
      .of(this.fakeCustomers)
      .do((customers: Customer[]) => customers.push(customer))
      .map((customers: Customer[]) => customers);
  }

}

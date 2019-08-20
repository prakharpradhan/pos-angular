import { Injectable } from "@angular/core";
import { HttpClientModule, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IcustDetails } from './customer/IcustDetails';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CustomerService {
  private _url = 'http://54.173.214.33:8080/customer/';
  constructor(private http: HttpClient) { }
  /**
   * 
   * @param id http get method to get customer data from db
   */
  getCustomer(id: String): Observable<IcustDetails[]> {
    var url_total = this._url + id;

    return this.http.get<IcustDetails[]>(url_total);
  }
}

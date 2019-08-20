import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer-service.service';
import { Router } from '@angular/router';
import { CommoncustService } from '../commoncust.service';

/**
 * component class to search customer
 */
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  public custarray = [];
  public errorMsg;
  public id: string;
  public errorcontrol: boolean = false;
  public customerName: string;
  constructor( private customerService: CustomerService, public route: Router) { }
  
  ngOnInit() {

  }
  /**
   * method to search customer by its id
   */
  searchCustomer() {
    this.errorcontrol = false;
    this.custarray = [];
   console.log(this.id);
    this.customerService.getCustomer(this.id)
      .subscribe(data => {
        console.log(data);
        this.custarray.push(data);
        localStorage.setItem('name',this.custarray[0].customerName);
        localStorage.setItem('id',this.custarray[0].customerId);
        console.log(localStorage.getItem("name"));
        this.route.navigateByUrl("customer/store");
 },
        error => {
          this.errorMsg = error.error.message;
          this.errorcontrol = true;
        }

      );
   
  }
}

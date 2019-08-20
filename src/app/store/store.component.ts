import { Component, OnInit } from '@angular/core';
import { StoreService } from '../store.service';
import { IcartDetails } from '../IcartDetails';
import { Router } from '@angular/router';

import { CustomerService } from '../customer-service.service';
import { CommoncartService } from '../commoncart.service';
import { CommoncustService } from '../commoncust.service';


/**
 * component class to search store and view available pizza in that store
 */

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  public storeName: string;
  public storearray = [];
  public errorMsg;
  public errorcontrol: boolean = false;
  public pizzaarray = [];
  public showPizza: boolean = false;
  public cartQty: number;
  public cartarray: IcartDetails = { itemId: 0, quantity: 0, custId: 0 };
  public cartId: number;
  public custName: string;
  public showStore: boolean = false;

  constructor(private customers: CommoncustService,private cart:CommoncartService,private custService: CustomerService, private storeService: StoreService, public route: Router) {



  }
  ngOnInit() {
  this.custName = localStorage.getItem('name');
  //this.custName= this.customers.getCust();
  //this.customers.getCust();
  }
/**
 * method to search store
 */
  searchStore() {

    this.errorcontrol = false;
    this.storearray = [];
    this.storeService.getStoreDetails(this.storeName)
      .subscribe(data => {
        this.storearray.push(data)
        this.showStore = true;
      },
        error => {
          this.errorMsg = error.error.message;
          this.errorcontrol = true;
        });
  }
  /**
   * 
   * @param name method to see pizza in the store
   */
  viewPizza(name: string) {
    this.showPizza = true;
    this.storeService.getPizza(name)
      .subscribe(data => this.pizzaarray = data,
        error => {
          this.errorMsg = error.error.message;
          this.errorcontrol = true;
        });
    console.log(this.pizzaarray);
  }
  /**
   * 
   * @param strid method to add to cart
   */
  addCart(strid: number) {
    let id: any = localStorage.getItem('id');
    this.cartarray.itemId = strid;
    this.cartarray.quantity = this.cartQty;
    this.cartarray.custId = id;
    this.cart.addToCart(this.cartarray,this.storeName);
    this.route.navigateByUrl('cart');
  }



}

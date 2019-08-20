import { Component, OnInit } from '@angular/core';
import { CartserviceService } from '../cartservice.service';
import { Icart } from './Icart';
import { Iorder } from './Iorder';
import { Router } from '@angular/router';
import { CommoncartService } from '../commoncart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
/**
 * component class to  perform curd operation on cart
 */
export class CartComponent implements OnInit {
  public cartarray = [];
  public errorMsg;
  public id: any;
  public errorcontrol: boolean = false;
  modify:boolean=true;
  qty: number = 0;
  public cart: Icart = { itemId: 0, quantity: 0, custId: 0, cartId: 0, restCharges: 0, delievryCharges: 0, total: 0 };
  public ord: Iorder = { cartId: 0, custId: 0 };
  constructor(private cartService: CartserviceService, private route: Router, private carts:CommoncartService) { }

  ngOnInit() {

  }
  /**
   * method to perform view  cart 
   */
  viewCart() {
    this.modify=true;
    let id = this.carts.getCartId();
    
    this.cartarray = [];
    this.cartService.getcart(id)
      .subscribe(data => this.cartarray.push(data),
        error => {
          this.errorMsg = error.error.message;
          this.errorcontrol = true;
        }

      );
  }
  /**
   * delete cart
   */
  dtl() {
    let id = this.carts.getCartId();
    this.cartService.delete(id)
      .subscribe(data => data,
        error => {
          this.errorMsg = error.error.message;
          this.errorcontrol = true;
        }

      );
    this.viewCart();
  }
  modif() {
    this.modify=false;
    
  }
  /**
   * cofirm orfer by adiing cart to order
   */
  order() {
    this.ord.cartId = this.carts.getCartId();
    this.ord.custId = Number(localStorage.getItem('id'));
    this.cartService.confirmOrder(this.ord).subscribe(data => { alert("your order Id is " + data) });
    this.route.navigateByUrl('customer');
  }
  /**
   * update cart data
   */
  updateCart(){
    this.cart.cartId = this.carts.getCartId();
    console.log(this.cart.cartId);
    this.cart.quantity = this.qty;
    this.cartService.updateCart(this.cart).subscribe(data => data);
    this.viewCart();
  }

}

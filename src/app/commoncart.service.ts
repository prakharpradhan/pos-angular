import { Injectable } from '@angular/core';
import { IcartDetails } from './IcartDetails';
import { StoreService } from './store.service';

@Injectable({
  providedIn: 'root'
})
export class CommoncartService {
  public cartarray: IcartDetails = { itemId: 0, quantity: 0, custId: 0 };
  cartId: any;
  constructor(private storeService: StoreService) { }
  addToCart(cartarray: IcartDetails, storeName: string) {
    let id: any = localStorage.getItem('id');

    this.storeService.addCart(storeName, cartarray).subscribe(data => { this.cartId = data },
      error => {
        // this.errorMsg = error.error.message;
        // this.errorcontrol = true;
      }
    );


  }
  getCartId(){
    return this.cartId;
  }
}


import { Component, OnInit } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number/ngx';

@Component({
  selector: 'app-promotions',
  templateUrl: './promotions.page.html',
  styleUrls: ['./promotions.page.scss'],
})
export class PromotionsPage{

  constructor(private callNumber: CallNumber) {}

  // Call Subscription Providers
  waterCall(){
    this.callNumber.callNumber("0993832532", true)
    .then(res => console.log('Launched dialer!', res))
    .catch(err => console.log('Error launching dialer', err));
  }
  netCall(){
    this.callNumber.callNumber("0993943951", true)
    .then(res => console.log('Launched dialer!', res))
    .catch(err => console.log('Error launching dialer', err));
  }
  lightCall(){
    this.callNumber.callNumber("0998865902", true)
    .then(res => console.log('Launched dialer!', res))
    .catch(err => console.log('Error launching dialer', err));
  }

}

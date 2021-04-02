import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {
  paymentMethods: any;

  constructor(public alertCtrl: AlertController, private route:Router) {
    this.paymentMethods = [
      {
        "id": 1,
        "name": "MTN Money",
      },
      {
        "id": 2,
        "name": "PayPal",
      },
    ]
   }
  async paymentPopup(){
    const prompt = await  this.alertCtrl.create({
      header: 'Please note',
      message: "ENTER MOBILE MONEY NUMBER",
      inputs: [
        {
          name: 'code',
          placeholder: 'code'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');

          }
        },
        {
          text: 'Proceed',
          handler: data => {
            //console.log('Saved clicked');
            this.route.navigate(['/changepassword']);
          }
        }
      ]
    });
    prompt.present();

   }

  ngOnInit() {
  }

}

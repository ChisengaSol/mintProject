import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.page.html',
  styleUrls: ['./forgotpassword.page.scss'],
})
export class ForgotpasswordPage implements OnInit {

  constructor(public alertCtrl: AlertController,private route:Router) { }


  async presentAlert() {
    const prompt = await  this.alertCtrl.create({
      header: 'Enter Passcode',
      message: "ENTER CODE SENT VIA EMAIL",
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

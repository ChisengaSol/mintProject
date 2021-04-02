import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.page.html',
  styleUrls: ['./changepassword.page.scss'],
})
export class ChangepasswordPage implements OnInit {

  constructor(public alertCtrl: AlertController) { }
  async alertPopup(){
    const alert = await this.alertCtrl.create({
      header: 'Yay!',
      message: 'New password has been created',
      buttons: ['OK']
    });
    alert.present();

  }

  ngOnInit() {
  }

}

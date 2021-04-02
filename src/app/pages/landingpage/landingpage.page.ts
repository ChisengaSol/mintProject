import { Component, OnInit, ViewChild} from '@angular/core';
import {IonSlides} from '@ionic/angular';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.page.html',
  styleUrls: ['./landingpage.page.scss'],
})
export class LandingpagePage implements OnInit {
  //jsonData: any = [];
  subscriptions: any

  @ViewChild('slider') slider: IonSlides;
  page = 0;

  constructor() {
    this.subscriptions = [
      {
        "id": 1,
        "name": "Water",
      },
      {
        "id": 2,
        "name": "Internet",
      },
      {
        "id": 3,
        "name": "Electricity",
      },

    ]
   }

  ngOnInit() {}

  selectedTab(index){
    this.slider.slideTo(index);
  }

}

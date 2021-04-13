import { Component, OnInit, ViewChild} from '@angular/core';
import {IonSlides} from '@ionic/angular';
import {HttpClient} from '@angular/common/http';

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

  constructor(private http:HttpClient) {
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
    // getServices(){
    //   return this.http.get('https://team-minty.herokuapp.com/services');
    //   //this.http
    // }
  }


  ngOnInit() {}

  selectedTab(index){
    this.slider.slideTo(index);
  }

}

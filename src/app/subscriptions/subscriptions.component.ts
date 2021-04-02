import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.scss'],
})
export class SubscriptionsComponent implements OnInit {
  subscriptions: any

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

}

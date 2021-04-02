import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SendnewpasswordcodePageRoutingModule } from './sendnewpasswordcode-routing.module';

import { SendnewpasswordcodePage } from './sendnewpasswordcode.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SendnewpasswordcodePageRoutingModule
  ],
  declarations: [SendnewpasswordcodePage]
})
export class SendnewpasswordcodePageModule {}

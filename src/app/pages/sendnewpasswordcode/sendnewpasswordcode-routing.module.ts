import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SendnewpasswordcodePage } from './sendnewpasswordcode.page';

const routes: Routes = [
  {
    path: '',
    component: SendnewpasswordcodePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SendnewpasswordcodePageRoutingModule {}

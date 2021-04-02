import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: HomePage,
    children:[
      {
        path: 'landingpage',
        children: [
          {
            path: '',
            loadChildren: () => import('../pages/landingpage/landingpage.module').then(m => m.LandingpagePageModule)
          }
        ]
      },
      {
        path: 'payment',
        children: [
          {
            path: '',
            loadChildren: () => import('../pages/payment/payment.module').then(m => m.PaymentPageModule)
          }
        ]
      },
      {
        path: 'account',
        children: [
          {
            path: '',
            loadChildren: () => import('../pages/account/account.module').then(m => m.AccountPageModule)
          }
        ]
      },
      {
        path:'',
        redirectTo: '/tabs/landingpage',
        pathMatch: 'full'
      }
    ]
  },
  {
    path:'',
    redirectTo: '/tabs/landingpage',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}

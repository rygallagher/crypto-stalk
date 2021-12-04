import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllCryptoComponent } from '../all-crypto/all-crypto.component';
import { MyCryptoComponent } from '../my-crypto/my-crypto.component';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'all-crypto',
        component: AllCryptoComponent,
      },
      {
        path: 'my-crypto',
        component: MyCryptoComponent,
      },
      {
        path: '',
        redirectTo: '/tabs/all-crypto',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/all-crypto',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}

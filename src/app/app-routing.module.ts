import { SalesChannelComponent } from './sales-channel/sales-channel.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/sales-channel', pathMatch: 'full' },
  { path: 'sales-channel', component: SalesChannelComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

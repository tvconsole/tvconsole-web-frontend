import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./setup-wizard/setup-wizard.module').then(m => m.SetupWizardModule)
  },
  {
    path: 'room',
    loadChildren: () => import('./room/room.module').then(m => m.RoomModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

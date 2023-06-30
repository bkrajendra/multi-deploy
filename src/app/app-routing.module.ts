import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PathOneComponent } from './path-one/path-one.component';
import { PathTwoComponent } from './path-two/path-two.component';

const routes: Routes = [
    {path: 'path-one', component: PathOneComponent},
    {path: 'path-two', component: PathTwoComponent},
    {path: '', redirectTo: '/path-one', pathMatch: 'full'},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

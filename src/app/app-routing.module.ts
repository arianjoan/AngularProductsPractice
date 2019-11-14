import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogInComponent } from './components/log-in/log-in.component';
import { ListProductComponent } from './components/list-product/list-product.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';


const routes: Routes = [
  {path: 'login', component: LogInComponent},
  {path: 'products', component: ListProductComponent},
  {path: 'register',component: SignUpComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {path:'home',loadChildren:()=>import("./home/home.module").then(mod=>mod.HomeModule)},
  {path:'admin',loadChildren:()=>import("./admin/admin.module").then(mod=>mod.AdminModule)},
  {path:'users',loadChildren:()=>import("./users/users.module").then(mod=>mod.UsersModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

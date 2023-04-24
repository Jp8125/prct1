import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { DetailInfoComponent } from './components/detail-info/detail-info.component';
import { HomeComponent } from './components/home/home.component';
import { ContectComponent } from './components/contect/contect.component';
import { ERRORComponent } from './components/error/error.component';

const routes: Routes = [{path:'home',component:HomeComponent}
,{path:'contact',component:ContectComponent},
{
path:'list',component:ListComponent,
children:[{path:'name/:id',component:DetailInfoComponent}]
},
{path:"",redirectTo:'/home',pathMatch: 'full'},
{path:"**",component:ERRORComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

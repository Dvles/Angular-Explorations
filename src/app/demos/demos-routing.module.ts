import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainDemoComponent } from './components/main-demo/main-demo.component';
import { Demo01Component } from './components/demo01/demo01.component';
import { Demo02Component } from './components/demo02/demo02.component';
import { Demo03Component } from './components/demo03/demo03.component';
import { Demo04Component } from './components/demo04/demo04.component';
import { Demo05Component } from './components/demo05/demo05.component';
import { Demo06ParentComponent } from './components/demo06-parent/demo06-parent.component';
import { Demo07Component } from './components/demo07/demo07.component';
import { Demo08Component } from './components/demo08/demo08.component';

const routes: Routes = [
  {path:'', component: MainDemoComponent, children:[
    {path:'demo01', component: Demo01Component},
    {path:'demo02', component: Demo02Component},
    {path:'demo03', component: Demo03Component},
    {path:'demo04', component: Demo04Component},
    {path:'demo05', component: Demo05Component},
    {path:'demo06', component: Demo06ParentComponent},
    {path:'demo07', component: Demo07Component},
    {path:'demo08', component: Demo08Component}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemosRoutingModule { }

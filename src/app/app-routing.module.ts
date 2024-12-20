import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { ClassbindingComponent } from './components/classbinding/classbinding.component';
import { HomeComponent } from './components/home/home.component';
import { InstafeedComponent } from './components/instafeed/instafeed.component';
import { InstagramComponent } from './components/instagram/instagram.component';
import { JdbcComponent } from './components/jdbc/jdbc.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { ParentComponent } from './components/parent/parent.component';
import { PestiqComponent } from './components/pestiq/pestiq.component';
import { ProductComponent } from './components/product/product.component';
import { PropertybinddingComponent } from './components/propertybindding/propertybindding.component';
import { ReactiveformComponent } from './components/reactiveform/reactiveform.component';
import { SelectedcourseComponent } from './components/selectedcourse/selectedcourse.component';
import { SigninComponent } from './components/signin/signin.component';
import { TaskcourseComponent } from './components/taskcourse/taskcourse.component';
import { TaskdetailsComponent } from './components/taskdetails/taskdetails.component';
import { TdfComponent } from './components/tdf/tdf.component';
import { IfComponent } from './directives/if/if.component';

const routes: Routes = [
  {
    path: ' ',
    redirectTo: 'home',
    pathMatch:'full'
  },
  {
    path: 'home',
    component: HomeComponent,
   
  },
  {
    path: 'instagram',
    component: InstagramComponent,
   
  },
  {
    path: 'signin',
    component: SigninComponent,
   
  },
  {
    path: 'pestiq',
    component: PestiqComponent,
   
  },
  {
    path: 'jdbc',
    component: JdbcComponent,
   
  },
  {
    path: 'instafeed',
    component: InstafeedComponent
   
  },
  {
    path: 'tdf',
    component: TdfComponent
  },
  {
    path: 'product',
    component: ProductComponent
  },
  {
    path: 'reactive',
    component: ReactiveformComponent
  },
  {
    path: 'if',
    component: IfComponent
  },
  {
    path: 'parent',
    component: ParentComponent
  },
  {
    path: 'selectedcourse/:id',
    component: SelectedcourseComponent
  },
  {
    path: 'property',
    component: PropertybinddingComponent
  },
  {
    path: 'classbind',
    component: ClassbindingComponent
  },
  {
    path: 'taskcourse',
    component: TaskcourseComponent
  },
   {
    path: 'calculator',
    component: CalculatorComponent
  },
  {
    path: 'taskdetails',
    component: TaskdetailsComponent
  },
  { path: 'user', loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule) },
  {
    path:'**',
    component:PagenotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { ChildComponent } from './components/child/child.component';
import { ClassbindingComponent } from './components/classbinding/classbinding.component';
import { HomeComponent } from './components/home/home.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { ParentComponent } from './components/parent/parent.component';
import { ProductComponent } from './components/product/product.component';
import { PropertybinddingComponent } from './components/propertybindding/propertybindding.component';
import { ReactiveformComponent } from './components/reactiveform/reactiveform.component';
import { SelectedcourseComponent } from './components/selectedcourse/selectedcourse.component';
import { StringinterpolationComponent } from './components/stringinterpolation/stringinterpolation.component';
import { TaskcourseComponent } from './components/taskcourse/taskcourse.component';
import { TaskdetailsComponent } from './components/taskdetails/taskdetails.component';
import { TdfComponent } from './components/tdf/tdf.component';
import { ForComponent } from './directives/for/for.component';
import { IfComponent } from './directives/if/if.component';
import { SwitchComponent } from './directives/switch/switch.component';
import { AngularmaterialModule } from './modules/angularmaterial/angularmaterial.module';
import { RouterComponent } from './routing/router/router.component';
import { PromiseObservableComponent } from './components/promise.observable/promise.observable.component';
import { CHighlightDirective } from './directives/c-highlight.directive';
import { EventbindingComponent } from './components/eventbinding/eventbinding.component';
import { JdbcComponent } from './components/jdbc/jdbc.component';
import { SquarePipe } from './pipe/square.pipe';
import { CustomdirectivesDirective } from './customdirectives.directive';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { InstagramComponent } from './components/instagram/instagram.component';
import { SigninComponent } from './components/signin/signin.component';
import { InstafeedComponent } from './components/instafeed/instafeed.component';
import { PestiqComponent } from './components/pestiq/pestiq.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    IfComponent,
    ForComponent,
    RouterComponent,
    PagenotfoundComponent,
    SwitchComponent,
    StringinterpolationComponent,
    ParentComponent,
    ChildComponent,
    PropertybinddingComponent,
    ClassbindingComponent,
    
    TaskcourseComponent,
    TaskdetailsComponent,
    SelectedcourseComponent,
    ProductComponent,
    TdfComponent,
    ReactiveformComponent,
    PromiseObservableComponent,
    CHighlightDirective,
    EventbindingComponent,
    JdbcComponent,
    SquarePipe,
    CustomdirectivesDirective,
    CalculatorComponent,
    InstagramComponent,
    SigninComponent,
    InstafeedComponent,
    PestiqComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularmaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

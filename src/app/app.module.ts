import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'; //追加
import { RouterModule, Routes } from '@angular/router'; //追加
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { from } from 'rxjs';
import { MessageComponent } from './message/message.component';
import { MystyleDirective } from './mystyle.directive';
import { MycheckService } from './mycheck.Service';
import { CaleComponent } from './cale/cale.component';


const routes:Routes = [
  {path:'hello', component: HelloComponent},
  {path:'msg/:id', component: MessageComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    MessageComponent,
    MystyleDirective,
    CaleComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      routes,
      {enableTracing:true}
    )
  ],
  providers: [],
  // bootstrap: [AppComponent]
  bootstrap: [CaleComponent]
})
export class AppModule {

  constructor(private service:MycheckService){
    service.name = 'hanako';
  }
 }

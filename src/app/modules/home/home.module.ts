import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './page/home/home.component';
import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAeA9jeENXhzn4OS-xzSYqLwleLLWytyY8'
      /* apiKey is required, unless you are a
      premium customer, in which case you can
      use clientId
      */
    })
  ]
})
export class HomeModule { }

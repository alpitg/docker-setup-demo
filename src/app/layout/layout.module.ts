import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { AgmCoreModule } from '@agm/core';



@NgModule({
  declarations: [MainLayoutComponent],
  imports: [
    CommonModule,
    
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAeA9jeENXhzn4OS-xzSYqLwleLLWytyY8'
      /* apiKey is required, unless you are a
      premium customer, in which case you can
      use clientId
      */
    })
  ],
  exports: [MainLayoutComponent]
})
export class LayoutModule { }

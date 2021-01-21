import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';



@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    ScrollToModule.forRoot()
  ],
  exports: [HeaderComponent]
})
export class HeaderModule { }

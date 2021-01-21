import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalWindowComponent } from './modal-window.component';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';


@NgModule({
  declarations: [ModalWindowComponent],
  imports: [
    CommonModule,
    ScrollToModule.forRoot()
  ],
  exports: [ModalWindowComponent]
})
export class ModalWindowModule { }

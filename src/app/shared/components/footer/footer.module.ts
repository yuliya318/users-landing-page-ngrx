import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { SubtitleModule } from '@shared/components/subtitle/subtitle.module';



@NgModule({
  declarations: [FooterComponent],
  imports: [
    CommonModule,
    SubtitleModule
  ],
  exports: [FooterComponent]
})
export class FooterModule { }

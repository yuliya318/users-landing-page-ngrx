import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeComponent } from './about-me.component';
import { TitleModule } from '@shared/components/title/title.module';

@NgModule({
  declarations: [AboutMeComponent],
  imports: [
    CommonModule,
    TitleModule
  ],
  exports: [AboutMeComponent]
})
export class AboutMeModule { }

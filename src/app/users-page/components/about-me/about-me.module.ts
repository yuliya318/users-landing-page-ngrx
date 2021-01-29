import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeComponent } from './about-me.component';
import { TitleModule } from '@shared/components/title/title.module';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

@NgModule({
  declarations: [AboutMeComponent],
  imports: [
    CommonModule,
    TitleModule,
    ScrollToModule.forRoot()
  ],
  exports: [AboutMeComponent]
})
export class AboutMeModule { }

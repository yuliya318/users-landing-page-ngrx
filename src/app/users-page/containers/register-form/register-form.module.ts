import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterFormComponent } from './register-form.component';
import { ReactiveFormsModule } from '@angular/forms';

import { TitleModule } from '@shared/components/title/title.module';
import { SubtitleModule } from '@shared/components/subtitle/subtitle.module';
import { ModalWindowModule } from '@shared/components/modal-window/modal-window.module';



@NgModule({
  declarations: [RegisterFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TitleModule,
    SubtitleModule,
    ModalWindowModule
  ],
  exports: [RegisterFormComponent]
})
export class RegisterFormModule { }

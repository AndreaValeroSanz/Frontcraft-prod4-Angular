import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail.component';

@NgModule({
  imports: [CommonModule,DetailComponent, NgModule]
})
export class DetailComponentModule { }
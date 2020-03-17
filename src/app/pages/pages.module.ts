import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageModule } from '../pages/home/home.module';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,

    // Import de páginas
    HomePageModule,
  ]
})
export class PagesModule { }

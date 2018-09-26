import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Router, Routes } from '@angular/router';

import { CharacterComponent } from './character.component';

const routes: Routes = [
  { path: '', component: CharacterComponent }
];

@NgModule({
  imports: [
    BrowserModule,
	RouterModule.forChild(routes)
  ],
  declarations: [
    CharacterComponent
  ],
  providers: []
})
export class CharacterModule { }

import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Router, Routes } from '@angular/router';

import { CharacterComponent } from './character.component';
import { CharacterService } from './character.service';

const routes: Routes = [
  { path: '', component: CharacterComponent }
];

@NgModule({
  imports: [
    BrowserModule,
	HttpClientModule,
	RouterModule.forChild(routes)
  ],
  declarations: [
    CharacterComponent
  ],
  providers: [
	{ provide: APP_BASE_HREF, useValue: '/' },
	CharacterService
  ]
})
export class CharacterModule { }

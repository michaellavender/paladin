import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Router, Routes } from '@angular/router';

import { CharacterComponent } from './character.component';
import { CharacterService } from './character.service';
import { BuilderModule } from './builder/builder.module';

const routes: Routes = [
  { path: '', component: CharacterComponent },
  { path: 'builder', loadChildren: () => BuilderModule }
];

@NgModule({
  imports: [
    BrowserModule,
	  HttpClientModule,
    RouterModule.forChild(routes),
    BuilderModule
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

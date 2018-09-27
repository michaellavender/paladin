import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { RouterModule, Router, Routes } from '@angular/router';

import { RulesModule } from '@rules/rules.module';

import { CharacterComponent } from './character.component';
import { CharacterService } from './character.service';

const routes: Routes = [
  { path: '', component: CharacterComponent },
  {
    path: 'builder',
    loadChildren: 'app/character/builder/builder.module#BuilderModule'
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    CommonModule,
	  HttpClientModule,
    RouterModule.forChild(routes),
    RulesModule
  ],
  exports: [RouterModule],
  declarations: [
    CharacterComponent
  ],
  providers: [
    CharacterService
  ]
})
export class CharacterModule { }

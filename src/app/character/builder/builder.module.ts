import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, Routes } from '@angular/router';

import { RulesModule } from '@rules/rules.module';

import { BuilderComponent } from './builder.component';
import { ClassSelectComponent } from './class-select.component';
import { RaceSelectComponent } from './race-select.component';
import { CharacterService } from '../character.service';

const routes: Routes = [
  { path: '', component: BuilderComponent, },
  { path: 'class', component: ClassSelectComponent },
  { path: 'race', component: RaceSelectComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    RulesModule
  ],
  declarations: [
    BuilderComponent,
    ClassSelectComponent,
    RaceSelectComponent
  ],
  providers: [
    CharacterService
  ]
})
export class BuilderModule { }

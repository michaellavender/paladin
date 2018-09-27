import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import { RulesService } from './rules.service';

@NgModule({
  imports: [
    HttpClientModule
  ],
  declarations: [
    ],
  providers: [
    RulesService
  ]
})
export class RulesModule { }

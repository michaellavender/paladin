import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Router, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CharacterModule } from './character/character.module';

const appRoutes: Routes = [
  { path: 'character', loadChildren: () => CharacterModule }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
	  RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
	  CharacterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

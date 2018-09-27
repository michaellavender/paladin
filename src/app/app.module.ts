import { APP_BASE_HREF } from '@angular/common'
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Router, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    //redirectTo: '/character',
    pathMatch: 'full'
  },
  {
    path: 'character',
    loadChildren: 'app/character/character.module#CharacterModule'
  },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
  bootstrap: [AppComponent],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' }
  ]
})
export class AppModule { }

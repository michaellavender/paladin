import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Router, Routes } from '@angular/router';

import { ClassSelectComponent } from './class-select.component';
import { RaceSelectComponent } from './race-select.component';
import { CharacterService } from '../character.service';

const routes: Routes = [
    { path: 'class', component: ClassSelectComponent },
    { path: 'race', component: RaceSelectComponent }
];

@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        ClassSelectComponent,
        RaceSelectComponent
    ],
    providers: [
        { provide: APP_BASE_HREF, useValue: '' },
        CharacterService
    ]
})
export class BuilderModule { }

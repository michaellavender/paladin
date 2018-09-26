import { Component } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'

@Component({
  templateUrl: './character.component.html'
})
export class CharacterComponent {
	  classes: any[] = [];

    constructor(private httpClient: HttpClient) { }

	  ngOnInit() {
    }
}

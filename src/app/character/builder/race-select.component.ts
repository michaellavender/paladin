import { Component } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'

@Component({
  templateUrl: './race-select.component.html'
})
export class RaceSelectComponent {
  races: any[] = [];

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get<any[]>('/assets/data/races.json')
      .subscribe(data => {

        this.races = data;
      });
  }
}

import { Component } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'

@Component({
  templateUrl: './class-select.component.html'
})
export class ClassSelectComponent {
  classes: any[] = [];

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get<any[]>('/assets/data/classes.json')
      .subscribe(data => {

        this.classes = data;
      });
  }
}

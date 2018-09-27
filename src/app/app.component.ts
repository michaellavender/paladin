import { Component } from '@angular/core';
//import $ from 'jquery';
//import Foundation from 'foundation-sites';

//window.$ = $;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'paladin';

  constructor() {}
  
  ngOnInit() {
	  try{
      //$(document).foundation();    // CALL foundation() INITIALIZATION FUNCTION FROM HERE
	  } catch(e) {
		  alert('failed ' + e);
	  }
  }
}

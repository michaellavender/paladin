import { Component, OnInit } from '@angular/core';

declare var $:any;      // TO ACCESS JQUERY '$' FUNCTION

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
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

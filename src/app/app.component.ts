import { Component } from '@angular/core';
import { RouterModule, Router, Routes } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'paladin';

  constructor(private router: Router) {
    router.errorHandler = (error) => {
      console.log('routing error: ' + error);
    };

    router.events.subscribe(event => {
      console.log(event);
    });
  }
  
  ngOnInit() {
	  try{
      //$(document).foundation();    // CALL foundation() INITIALIZATION FUNCTION FROM HERE
	  } catch(e) {
		  alert('failed ' + e);
	  }
  }
}

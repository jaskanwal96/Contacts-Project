import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'contact-app';
  stateFlag = true;
  
  // Toggling the headers
  toggleState(event) {
    console.log(event.target.id);
    if(event.target.id === 'contacts-header') {
      this.stateFlag = true;
    }
    else {
      this.stateFlag = false;
    }
  }
}

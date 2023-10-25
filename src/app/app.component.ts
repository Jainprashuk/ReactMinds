import { Component } from '@angular/core';

@Component({   // @ - component decorator
  selector: 'app-root',
  template: `
  
 <app-header></app-header>
 <router-outlet name="primary"></router-outlet> 
 <app-footer></app-footer> 
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reactminds';
}

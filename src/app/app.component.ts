import { Component } from '@angular/core';
import { 
  faUser
} from '@fortawesome/free-regular-svg-icons';

import { 
  faKey
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'invest-in-it';
  faUser = faUser;
  faKey = faKey;
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';

/* Iconses regulares */
import { 
  faUser 
} from '@fortawesome/free-regular-svg-icons';

/* Icones solidos */
import { 
  faSpinner 
} from '@fortawesome/free-solid-svg-icons';



@NgModule({
  // declarations: [],
  // imports: [CommonModule],
  exports: [FontAwesomeModule]
})
export class IconsModule { 
  constructor(library: FaIconLibrary){
    library.addIcons(faUser, faSpinner);
  }
}

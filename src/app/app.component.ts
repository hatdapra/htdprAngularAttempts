import { Component } from '@angular/core';
import { faList, faTable, faTruck } from '@fortawesome/free-solid-svg-icons';
import { ConfigService } from './services/config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Fuvarösszesítő';
  menuItems = this.config.menuItems;
  faTruck = faTruck;
  // faTable = faTable;
  // faList = faList;

  constructor(
    private config: ConfigService
  ){

  }
}



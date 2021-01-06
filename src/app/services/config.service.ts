import { Injectable } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faList, faTable } from '@fortawesome/free-solid-svg-icons';

export interface IMenuItem {
  url: string;
  text: string;
  disabled?: boolean;
  icon?: IconDefinition;
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  menuItems: IMenuItem[] = [
    {url: '/', text: 'Fuvarok', icon: faTable},
    {url: '/basic', text: 'Listák szerkesztése', icon: faList},
  ];


  constructor() { }
}

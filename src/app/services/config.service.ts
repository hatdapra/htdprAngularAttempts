import { Injectable } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faList, faTable } from '@fortawesome/free-solid-svg-icons';

export interface IMenuItem {
  url: string;
  text: string;
  disabled?: boolean;
  icon?: IconDefinition;
}

export interface ICodeItem{
  id: number;
  code: string;
  premium?: string;
}

export interface ICarrierItem{
  id: number;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  menuItems: IMenuItem[] = [
    {url: '/', text: 'Fuvarok', icon: faTable},
    {url: '/listak', text: 'Listák szerkesztése', icon: faList},
    {url: '/test', text: 'Teszt', icon: faList},
  ];
  
  constructor() { 
    
  }
}

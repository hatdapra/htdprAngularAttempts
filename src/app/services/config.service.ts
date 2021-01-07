import { Injectable } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faList, faTable } from '@fortawesome/free-solid-svg-icons';

export interface IMenuItem {
  url: string;
  text: string;
  disabled?: boolean;
  icon?: IconDefinition;
}

export interface ICodeItems{
  id: number;
  code: string;
  premium?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  menuItems: IMenuItem[] = [
    {url: '/', text: 'Fuvarok', icon: faTable},
    {url: '/listak', text: 'Listák szerkesztése', icon: faList},
  ];

  codeItems: ICodeItems[] = [
    {id: 1, code: "EK", premium: "nem"},
    {id: 2, code: "EPF", premium: "igen"},
    {id: 3, code: "EXE", premium: "nem"},
    {id: 4, code: "EXI", premium: "nem"}
  ]


  constructor() { 
    
  }
}

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
  ];

  codeItems: ICodeItem[] = [
    {id: 1, code: "EK", premium: "nem"},
    {id: 2, code: "EPF", premium: "igen"},
    {id: 3, code: "EXE", premium: "nem"},
    {id: 4, code: "EXI", premium: "nem"}
  ]

  carrierItems: ICarrierItem[] = [
    {id: 1, name: "Airmax" },
    {id: 2, name: "Baukó Attila" },
    {id: 3, name: "Békéshír Kft." },
    {id: 4, name: "DHL Express" },
    {id: 5, name: "DHL Freight" },
    {id: 6, name: "DHL Global Forwarding" }
  ];

  constructor() { 
    
  }
}

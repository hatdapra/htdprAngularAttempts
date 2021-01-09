import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BasicService } from 'src/app/services/basic.service';
import { ICarrierItem } from 'src/app/services/config.service';

@Component({
  selector: 'app-carriers',
  templateUrl: './carriers.component.html',
  styleUrls: ['./carriers.component.scss']
})
export class CarriersComponent implements OnInit {
  carriersTitle: string = "Fuvarozók";
  carriersDataSource$: Observable<ICarrierItem[]> = this.bs.get('carriers');
  carriersDisplayedColumns: string[] = ["id", "name", "actions"];
  carriersDisplayedColumnsLabel: any = {id: "ID", name: "Név", actions: ""};


  constructor(
    private bs: BasicService
  ) { }

  ngOnInit(): void {
  }

}

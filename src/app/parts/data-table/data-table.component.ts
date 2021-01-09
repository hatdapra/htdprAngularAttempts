import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigService, ICodeItem } from '../../services/config.service';
import { BasicService } from '../../services/basic.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {
  @Input() title: string;
  @Input() dataSource$: any;
  @Input() displayedColumns: string[];
  @Input() displayedColumnsLabel: any;

  // dataSource$: Observable<ICodeItem[]> = this.bs.get();
  

  constructor(
    private config: ConfigService,
    private bs: BasicService
  ) { }

  ngOnInit(): void {
  }

}

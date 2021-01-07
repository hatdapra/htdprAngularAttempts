import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../services/config.service';

@Component({
  selector: 'app-codes',
  templateUrl: './codes.component.html',
  styleUrls: ['./codes.component.scss']
})
export class CodesComponent implements OnInit {
  dataSource = this.config.codeItems;
  displayedColumns: string[] = ["id", "code", "premium", "actions"];
  displayedColumnsLabel: any = {id: "ID", code: "Kód", premium: "Prémium", actions: "gombok"};

  constructor(
    protected config: ConfigService
  ) { }

  ngOnInit(): void {
  }

}

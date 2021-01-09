import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ICodeItem } from '../../services/config.service';
import { BasicService } from '../../services/basic.service';

@Component({
  selector: 'app-codes',
  templateUrl: './codes.component.html',
  styleUrls: ['./codes.component.scss']
})
export class CodesComponent implements OnInit {
  codesTitle: string = "Kódok";
  codesDataSource$: Observable<ICodeItem[]> = this.bs.get('codes');
  codesDisplayedColumns: string[] = ["id", "code", "premium", "actions"];
  codesDisplayedColumnsLabel: any = {id: "ID", code: "Kód", premium: "Prémium", actions: ""};

  constructor(
    private bs: BasicService
  ) { }

  ngOnInit(): void {
  }

}

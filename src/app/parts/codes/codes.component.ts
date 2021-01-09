import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ICodeItem } from '../../services/config.service';
import { BasicService } from '../../services/basic.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-codes',
  templateUrl: './codes.component.html',
  styleUrls: ['./codes.component.scss']
})
export class CodesComponent implements OnInit, OnDestroy{
  codesTitle: string = "Kódok";
  codesDataSource$: Observable<ICodeItem[]> = this.bs.get('codes');
  codesDisplayedColumns: string[] = ["id", "code", "premium", "actions"];
  codesDisplayedColumnsLabel: any = {id: "ID", code: "Kód", premium: "Prémium", actions: ""};

  title: string = "Kódok";
  dataSource: MatTableDataSource<ICodeItem> = new MatTableDataSource<ICodeItem>();
  displayedColumns: string[] = ["id", "code", "premium", "actions"];
  displayedColumnsLabel: any = {id: "ID", code: "Kód", premium: "Prémium", actions: ""};

  dataSubscription: Subscription;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  pageSizes: number[] = [5, 10, 25, 100];

  constructor(
    private bs: BasicService
  ) { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSubscription = this.bs.getCodes().subscribe(
      codes => this.dataSource.data = (codes as unknown as ICodeItem[])
    );
  }

  ngOnDestroy():void{
    this.dataSubscription.unsubscribe();
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { config } from 'rxjs';
import { DataTableExtendedConfig } from './data-table-helper.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {

  @Input() public config!: DataTableExtendedConfig;
  @Input() public data: any[] = [];

  public columnsToDisplay: string[];
  constructor() { }

  ngOnInit(): void {
    if (config) {
      this.columnsToDisplay = this.config.titleColumn.slice();
    }
  }

  public rowClick() { }

}

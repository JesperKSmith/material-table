import { Component } from '@angular/core';
import {
  MatTableDataSource, MatPaginator, MatSort, MatTable, MatTableModule, MatTabHeader,
  MatHeaderRow, MatHeaderCell, MatHeaderCellDef, MatHeaderRowDef,
  MatSortHeader, MatRow, MatRowDef,  MatCell, MatCellDef
} from '@angular/material';



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  columns = ['date', 'flight', 'status'];    
  dataSource = new MatTableDataSource<Entry>(ENTRIES);
}

export interface Entry {
  departureDate: string;
  arrivalDate: string;
  from: string;
  to: string;
  status: string;
}
const ENTRIES: Entry[] = [
  {departureDate: "12:34 PM 12/03/2018", arrivalDate: "14:56 PM 12/03/2018", from: 'CPH', to: 'AUS', status: "Check-in"},
  {departureDate: "12:34 PM 12/03/2018", arrivalDate: "14:56 PM 12/03/2018", from: 'CPH', to: 'AUS', status: "Completed"},
  {departureDate: "12:34 PM 12/03/2018", arrivalDate: "14:56 PM 12/03/2018", from: 'CPH', to: 'AUS', status: "Upcoming"}
];

  


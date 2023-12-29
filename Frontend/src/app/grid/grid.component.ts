import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ColDef } from 'ag-grid-community';
interface IRow {
  topic: string;
  description: string;
  category: string;
  difficulty: number;
  prerequisite: string;
  tags: string[];
  source: string;
}
@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent implements OnInit {
  rowData: IRow[]=[];
  colDefs: ColDef<IRow>[] = [
    { field: 'topic' },
    { field: 'description' },
    { field: 'category' },
    { field: 'difficulty' },
    { field: 'prerequisite' },
    { field: 'tags', valueGetter: (params: any) => params.data.tags.join(', ') },
    { field: 'source' },
  ];
  defaultColDef = {
    sortable: true,
    filter: true,
  };

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // Fetch data from your backend
    this.http.get<{ success: boolean, computerScienceKnowledge: IRow[] }>('http://localhost:3001/api/computer-science').subscribe((data) => {
      console.log('Fetched data:', data);
      this.rowData = data.computerScienceKnowledge; // Access the property directly
      console.log('RowData:', this.rowData);
    });
  }
}

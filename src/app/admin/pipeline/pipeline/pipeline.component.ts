import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { PipelineService } from './pipeline.service';
import { MatDialog } from '@angular/material/dialog';
import { CreatePipelineComponent } from './create/create.component';
import { DeletePipelineComponent } from './delete/delete.component';

@Component({
  selector: 'app-pipeline',
  templateUrl: './pipeline.component.html',
  styleUrls: ['./pipeline.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class PipelineComponent implements OnInit {

  constructor(private pipelineService: PipelineService, public dialog: MatDialog) {

  }
  references: any[] = [];
  ngOnInit(): void {
    this.pipelineService.getProperties().subscribe(async (res: any) => {
      // change column display
      this.properties = res.content;
      const arr = [];
      this.columnsToDisplay = Object.keys(res.content)
        .sort((a: any, b: any) => (this.properties[a].order > this.properties[b].order) ? 1 : ((this.properties[b].order > this.properties[a].order) ? -1 : 0));
      this.columnsToDisplay.push('action');

      // get reference column
      this.references = Object.keys(res.content)
        .filter((column: any) => this.properties[column].reference !== undefined && this.properties[column].filter);
      // 

      // get data referent
      await Promise.all(this.references.map(async column => {
        await this.pipelineService.getData(this.properties[column].reference.api_url).subscribe((res) => {
          this.properties[column].data = res;
        })
      }))
    })

    // this.getDatasource();
  }

  getDatasource() {
    // set datasource
    const id = this.filter.organization_id;
    this.pipelineService.all(id).subscribe((res: any) => {
      this.dataSource = res;
    })
  }
  filter: any = {};
  dataSource: any;
  columnsToDisplay: any;
  expandedElement: any | null | undefined;
  properties: any;
  openDialog(dataSource?: any): void {
    const dialogRef = this.dialog.open(CreatePipelineComponent, {
      width: '550px',
      data: { properties: this.properties, dataSource }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

      this.getDatasource();
    });
  }
  confirmDialog(dataSource?: any): void {
    const dialogRef = this.dialog.open(DeletePipelineComponent, {
      width: '550px',
      data: { properties: this.properties, dataSource }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

      this.getDatasource();
    });
  }
}



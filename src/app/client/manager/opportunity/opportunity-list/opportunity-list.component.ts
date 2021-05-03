import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateOpportunityComponent } from '../create/create.component';
import { OpportunityService } from '../opportunity.service';

@Component({
  selector: 'selector-client-manager-opportunity-opportunity-list',
  templateUrl: 'opportunity-list.component.html',
  styleUrls: ['./opportunity-list.component.scss']
})

export class OpportunityListComponent implements OnInit {
  constructor(private opportunityService: OpportunityService, private http: HttpClient, public dialog: MatDialog) { }


  dataSource: any;
  columnsToDisplay: any;
  expandedElement: any | null | undefined;
  properties: any;
  pipelines: any[] = [];
  ngOnInit() {
    //get table properties
    this.opportunityService.getProperties().subscribe((res: any) => {
      // change column display
      this.properties = res.content;
      this.columnsToDisplay = Object.keys(res.content)
        .sort((a: any, b: any) => (this.properties[a].order > this.properties[b].order) ? 1 : ((this.properties[b].order > this.properties[a].order) ? -1 : 0));
      this.columnsToDisplay.push('action');
    })
    this.opportunityService.all().subscribe(res => {
      this.pipelines = res.sort((a: any, b: any) => (a.order > b.order) ? 1 : ((b.order > a.order) ? -1 : 0));
      console.log(this.pipelines);

    })
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
      const pipelineId = event.container.id;
      const oppId = event.item.element.nativeElement.id;

      const pipeline = this.pipelines.find(p => p.id === pipelineId);
      const opp = pipeline.opportunities.find(o => o.id === oppId);
      opp.pipeline_id = pipelineId;
      const url = 'http://localhost:3000/cms/opportunity';
      this.http.put(`${url}/${opp.id}`, opp).subscribe(res => {
        console.log(res);

      })


    }
  }

  openDialog(dataSource?: any): void {
    const dialogRef = this.dialog.open(CreateOpportunityComponent, {
      width: '550px',
      data: { properties: this.properties, dataSource: dataSource || {} }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }
}
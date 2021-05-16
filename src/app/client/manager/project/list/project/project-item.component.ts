import { ProjectService } from './../../project.service';
import { Component, Input, OnInit } from '@angular/core';
import { DeleteProjectComponent } from '../../delete/delete.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
    selector: 'project-item',
    templateUrl: 'project-item.component.html',
    styleUrls: ["./project-item.component.scss"]
})

export class ProjectItemComponent implements OnInit {

    constructor(private projectService: ProjectService,public dialog: MatDialog) { }

    @Input() projects: any[];
    dataSource: any;
    columnsToDisplay: any;
    expandedElement: any | null | undefined;
    properties: any;
    ngOnInit() { 
        this.projectService.getProperties().subscribe((res: any) => {
            // change column display
            this.properties = res.content;
      
            const arr = ["description", "home_number", "street", "product_type", "product_unit_id",
            "city_id", "wards_id", "district_id", "country_id"]
            this.columnsToDisplay = Object.keys(res.content).filter(c => !arr.includes(c)).
              sort((a: any, b: any) => (this.properties[a].order > this.properties[b].order) ? 1 : ((this.properties[b].order > this.properties[a].order) ? -1 : 0));
            this.columnsToDisplay.push('action');
          })
      
          this.getDatasource();
        this.projects = this.projects.slice(0, 4);
    }

    addWishlist(pj: any) {
        console.log(pj.id);
        this.projectService.saveWishlist({ project_id: pj.id }).subscribe((res: any) => {
            const project = this.projects.find(p => p.id === res.project_id);
            if (res.delete_flag === 0) {
                project.wishlists.push(res);
            } else {
                project.wishlists.splice(project.wishlists.findIndex(w => w.id === res.id), 1)
            }
        });
    }
    confirmDialog(dataSource?: any): void {
        const dialogRef = this.dialog.open(DeleteProjectComponent, {
          width: '550px',
          data: { properties: this.properties, dataSource }
        });
    
        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
    
          this.getDatasource();
        });
      }
      getDatasource() {
        // set datasource
        this.projectService.all().subscribe((res: any) => {
          this.dataSource = res;
        })
      }
    
}
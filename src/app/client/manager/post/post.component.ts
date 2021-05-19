import { CreatePostComponent } from './../../../admin/post/post/create/create.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PostService } from './post.service';
import { DeletePostComponent } from 'src/app/admin/post/post/delete/delete.component';

@Component({
  selector: 'app-client-manager-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  title = 'RealEstate-';
  constructor(private postService: PostService, public dialog: MatDialog) {

  }

  ngOnInit(): void {
    //get table properties
    // http://localhost:3000/cms/table-config/post -> res:  {name: "", content: {}}
    this.postService.getProperties().subscribe((res: any) => {
      // change column display
      this.properties = res.content;
      this.columnsToDisplay = Object.keys(res.content).filter((column: any) => this.properties[column].visible !== true);
      this.columnsToDisplay.push('action');
    })

    this.getDatasource();
  }

  getDatasource() {
    // set datasource
    this.postService.all().subscribe((res: any) => {
      this.dataSource = res;
    })
  }

  dataSource: any;
  columnsToDisplay: any;
  expandedElement: any | null | undefined;
  properties: any;
  openDialog(dataSource?: any): void {
    const dialogRef = this.dialog.open(CreatePostComponent, {
      width: '550px',
      data: { properties: this.properties, dataSource }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

      this.getDatasource();
    });
  }
  confirmDialog(dataSource?: any): void {
    const dialogRef = this.dialog.open(DeletePostComponent, {
      width: '550px',
      data: { properties: this.properties, dataSource }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

      this.getDatasource();
    });
  }
}

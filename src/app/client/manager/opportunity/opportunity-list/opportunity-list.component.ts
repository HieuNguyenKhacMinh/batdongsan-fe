import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'selector-client-manager-opportunity-opportunity-list',
    templateUrl: 'opportunity-list.component.html',
    styleUrls: ['./opportunity-list.component.scss']
})

export class OpportunityListComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
    todo = [
        'Get to work',
        'Pick up groceries',
        'Go home',
        'Fall asleep'
      ];
    
      done = [
        'Get up',
        'Brush teeth',
        'Take a shower',
        'Check e-mail',
        'Walk dog'
      ];
    
      drop(event: CdkDragDrop<string[]>) {
        if (event.previousContainer === event.container) {
          moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        } else {
          transferArrayItem(event.previousContainer.data,
                            event.container.data,
                            event.previousIndex,
                            event.currentIndex);
        }
      }
    }
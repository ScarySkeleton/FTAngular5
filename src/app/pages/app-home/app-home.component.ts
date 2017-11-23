import { Component } from '@angular/core';

import { HighlightDirective } from '../../directives/highlight';
import { TaskService } from '../../services/task/task.service';
import { OnInit, OnChanges, DoCheck } from '@angular/core/src/metadata/lifecycle_hooks';
import { AgePipe } from '../../pipes/age.pipe';

@Component({
    selector: 'app-home',
    templateUrl: 'app-home.component.html',
    styleUrls: ['./app-home.component.css'],
    providers: [
        AgePipe
    ]
})
export class HomeComponent implements OnInit, OnChanges, DoCheck {
    constructor(
        private taskService: TaskService,
        private agePipe: AgePipe
    ) {
        console.log("app home constructor");
     }
    
     currentAge: number;
     value: number = 100;
     str: string = "teXt";

     tasks: Array<object>;

     ngOnInit() {
         this.tasks = this.taskService.getTasks();
         console.log("home component on init");
     }

     ngOnChanges() {
         console.log("home component on changes");
     }

     ngDoCheck() {
         console.log("home component do check");
     }

    getTask() {
        return this.taskService.getTask();
    }

    getTasks() {
        return this.taskService.getTasks();
    }

    getAge() {
        this.currentAge = this.agePipe.transform(this.value);
        return this.currentAge;
    }
}

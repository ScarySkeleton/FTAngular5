import { Component } from '@angular/core';

import { TaskService } from '../../services/task/task.service';

@Component({
    selector: 'app-home',
    templateUrl: 'app-home.component.html',
    styleUrls: ['./app-home.component.css']
})
export class HomeComponent {
    constructor(private task: TaskService) { }
    
    getTask() {
        return this.task.getTask();
    }

    getTasks() {
        return this.task.getTasks();
    }
}

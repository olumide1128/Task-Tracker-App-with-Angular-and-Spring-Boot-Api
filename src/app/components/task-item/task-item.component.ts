import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Task } from '../../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  @Input() task: Task;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter()
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter()
  faTimes = faTimes;
  
  constructor() { }

  ngOnInit(): void {
  }

  onDelete(t: Task){
    console.log("Delete Icon Clicked!");
    this.onDeleteTask.emit(t);
  }

  onToggle(t: Task){
    this.onToggleReminder.emit(t);
  }

}

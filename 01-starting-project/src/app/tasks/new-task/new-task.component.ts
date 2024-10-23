import { Component, EventEmitter, Output } from '@angular/core';
import { NewTask } from '../task/task.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Output() closeAddTask = new EventEmitter<void>();
  @Output() newTaskData = new EventEmitter<NewTask>();
  enteredTitle = '';
  enteredSummary = '';
  enteredDueDate = '';

  closeDialog() {
    this.closeAddTask.emit();
  }

  onCreate() {
    this.newTaskData.emit({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDueDate,
    });
  }
}

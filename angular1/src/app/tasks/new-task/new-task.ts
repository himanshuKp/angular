import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NewTaskData} from '../task.model';
import {TasksService} from '../tasks.service';

@Component({
  selector: 'app-new-task',
  imports: [
    FormsModule
  ],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css'
})
export class NewTask {
  @Input({required: true}) userId!: string;
  @Output() cancelTask = new EventEmitter<void>();
  @Output() close = new EventEmitter<void>();
  private taskService = inject(TasksService);
  enteredTitle = '';
  enteredSummary = '';
  enteredDueDate = '';

  onCancelAddTask() {
    this.cancelTask.emit();
  }

  onAddTask() {
    this.taskService.addTask({
        title: this.enteredTitle,
        summary: this.enteredSummary,
        dueDate: this.enteredDueDate
      },
      this.userId);
    this.close.emit();
  }
}

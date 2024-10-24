import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { NewTask } from '../task/task.model';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Input({ required: true }) userId!: string;
  @Output() closeAddTask = new EventEmitter<void>();
  enteredTitle = '';
  enteredSummary = '';
  enteredDueDate = '';

  private taskService = inject(TasksService);

  closeDialog() {
    this.closeAddTask.emit();
  }

  onCreate() {
    this.taskService.addNewTask(
      {
        title: this.enteredTitle,
        summary: this.enteredSummary,
        dueDate: this.enteredDueDate,
      },
      this.userId
    );
    this.closeAddTask.emit();
  }
}

import {Component, ElementRef, inject, viewChild} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TasksService} from '../tasks.service';
import {LoggingService} from '../../services/logging.service';

@Component({
  selector: 'app-new-task',
  imports: [
    FormsModule
  ],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css'
})
export class NewTask {
  private formEl = viewChild<ElementRef<HTMLFormElement>>('form');
  private taskService = inject(TasksService);
  private loggingService = inject(LoggingService);

  onAddTask(title: string, description: string) {
    this.taskService.onAddTask({title, description});
    this.formEl()?.nativeElement.reset();
    this.loggingService.logStatus("Added new task "+ title);
  }
}

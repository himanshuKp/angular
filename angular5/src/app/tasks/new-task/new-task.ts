import {Component, ElementRef, inject, viewChild} from '@angular/core';
import {FormsModule} from '@angular/forms';
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
  private formEl = viewChild<ElementRef<HTMLFormElement>>('form');
  private taskService = inject(TasksService);

  onAddTask(title: string, description: string) {
    this.taskService.onAddTask({title, description});
    this.formEl()?.nativeElement.reset();
  }
}

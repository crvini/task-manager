import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TaskCardComponent } from '../../../componets/tasks/task-card/task-card.component';
import { TasksUsecase } from '../../../../core/usecases/task/tasks-usecase';
import { Task } from '../../../../core/interfaces/task/task';
import { catchError, EMPTY, finalize, tap } from 'rxjs';
import { CommonModule } from '@angular/common';
import { DeleteTaskUsecase } from '../../../../core/usecases/task/delete-task-usecase';
import { CreateTaskUsecase } from '../../../../core/usecases/task/create-task-usecase';
import { UpdateTaskUsecase } from '../../../../core/usecases/task/update-task-usecase';
import { DialogModule } from 'primeng/dialog'
import { FormGroup, FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms'
import { InputTextModule } from 'primeng/inputtext';
@Component({
  selector: 'app-tasks',
  imports: [
    CommonModule,
    ButtonModule,
    CardModule,
    TaskCardComponent,
    DialogModule,
    FormsModule,
    InputTextModule,
  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  disableTask: boolean = false;
  newTask: Task = {
    id: '',
    title: '',
    description: '',
    status: false
  }
  displayModalTask: boolean = false;
  selectedFilter: string = "all";
  constructor(
    private tasksUseCase: TasksUsecase,
    private deleteTaskUseCase: DeleteTaskUsecase,
    private createTaskUseCase: CreateTaskUsecase,
    private updateTaskUseCase: UpdateTaskUsecase
  ) { }
  ngOnInit(): void {
    this.getTasks();
  }
  getTasks() {
    this.tasksUseCase
      .execute()
      .pipe(
        tap((result) => {
          this.tasks = result.data;

        }),
        catchError((error) => {
          console.error('Error:', error)
          return EMPTY
        }),
        finalize(() => {

        }),
      )
      .subscribe()
  }
  deleteTask(id: string) {

    this.deleteTaskUseCase
      .execute(id)
      .pipe(
        tap((result) => {

          this.getTasks();
        }),
        catchError((error) => {
          console.error('Error:', error)
          return EMPTY
        }),
        finalize(() => {

        }),
      )
      .subscribe()
  }
  updateTask(id: string) {
    this.updateTaskUseCase
      .execute({ id, isCompleted: true })
      .pipe(
        tap((result) => {

          this.getTasks();
        }),
        catchError((error) => {
          console.error('Error:', error)
          return EMPTY
        }),
        finalize(() => {

        }),
      )
      .subscribe()
  }
  saveTask(taskForm: NgForm) {
    this.disableTask = true;
    if (
      this.newTask.title == undefined || this.newTask.title == '' ||
      this.newTask.description == undefined || this.newTask.description == ''
    ) {
      Object.values(taskForm.controls).forEach((control: any) => {
        control.markAsTouched();
      });
      this.disableTask = false;

      return;
    }
    this.createTaskUseCase
      .execute(this.newTask)
      .pipe(
        tap((result) => {
          this.disableTask = false;
          this.displayModalTask = false;
          this.resetForm(taskForm);
          this.getTasks();
        }),
        catchError((error) => {
          console.error('Error:', error)
          return EMPTY
        }),
        finalize(() => {

        }),
      )
      .subscribe()

  }
  resetForm(taskForm: NgForm) {
    this.newTask = {
      id: '',
      title: '',
      description: '',
      status: false
    }
    taskForm.resetForm();
    Object.values(taskForm.controls).forEach((control: any) => {
      control.markAsUntouched();
      control.setErrors(null);
    });
  }

  setFilterAndLoadTasks(filter: string) {
    this.selectedFilter = filter;
    this.tasksUseCase.setFilter(filter);
    this.getTasks();
  }
}

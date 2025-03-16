import { TaskRepository } from "../app/task-module/core/repositories/task/task-repository";
import { CreateTaskUsecase } from "../app/task-module/core/usecases/task/create-task-usecase";
import { DeleteTaskUsecase } from "../app/task-module/core/usecases/task/delete-task-usecase";
import { TasksUsecase } from "../app/task-module/core/usecases/task/tasks-usecase";
import { UpdateTaskUsecase } from "../app/task-module/core/usecases/task/update-task-usecase";

const createTaskUseCaseFactory = (taskRepo: TaskRepository) =>
    new CreateTaskUsecase(taskRepo);
  
  const deleteTaskUseCaseFactory = (taskRepo: TaskRepository) =>
    new DeleteTaskUsecase(taskRepo);
  
  const tasksUseCaseFactory = (taskRepo: TaskRepository) =>
    new TasksUsecase(taskRepo);
  
  const updateTaskUseCaseFactory = (taskRepo: TaskRepository) =>
    new UpdateTaskUsecase(taskRepo);

export const createTaskUseCaseProvider = {
    provide: CreateTaskUsecase,
    useFactory: createTaskUseCaseFactory,
    deps: [TaskRepository],
  };
  
  export const deleteTaskUseCaseProvider = {
    provide: DeleteTaskUsecase,
    useFactory: deleteTaskUseCaseFactory,
    deps: [TaskRepository],
  };
  
  export const tasksUseCaseProvider = {
    provide: TasksUsecase,
    useFactory: tasksUseCaseFactory,
    deps: [TaskRepository],
  };
  
  export const updateTaskUseCaseProvider = {
    provide: UpdateTaskUsecase,
    useFactory: updateTaskUseCaseFactory,
    deps: [TaskRepository],
  };
  
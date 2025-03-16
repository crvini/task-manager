import { Observable, map } from "rxjs";
import { BaseResponse } from "../../interfaces/base-response";
import { Task } from "../../interfaces/task/task";
import { UseCase } from "../use-case";
import { TaskRepository } from "../../repositories/task/task-repository";

export class TasksUsecase implements UseCase<void, BaseResponse<Task[]>> {
    private filter: string = "all"
    constructor(
        private repository: TaskRepository
    ) { }
    setFilter(filter: string) {
        this.filter = filter;
    }

    execute(): Observable<BaseResponse<Task[]>> {
        return this.repository.getTasks().pipe(
            map((response) => {
                let filteredTasks = response.data;
                if (this.filter === "completed") {
                    filteredTasks = response.data.filter(task => task.status);
                } else if (this.filter === "pending") {
                    filteredTasks = response.data.filter(task => !task.status);
                }
                return { ...response, data: filteredTasks };
            })
        );
    }
}

import { Observable } from "rxjs";
import { BaseResponse } from "../../interfaces/base-response";
import { Task } from "../../interfaces/task/task";
import { UseCase } from "../use-case";
import { TaskRepository } from "../../repositories/task/task-repository";

export class CreateTaskUsecase  implements UseCase<Task,BaseResponse<string>>{
     constructor(
            private repository: TaskRepository
        ) {}

    execute(params: Task): Observable<BaseResponse<string>> {
        return this.repository.createTask(params);
    }

}

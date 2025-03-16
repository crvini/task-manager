import { Observable } from "rxjs";
import { BaseResponse } from "../../interfaces/base-response";
import { UseCase } from "../use-case";
import { TaskRepository } from "../../repositories/task/task-repository";

export class UpdateTaskUsecase implements UseCase<{id: string, isCompleted: boolean},BaseResponse<boolean>>{
     constructor(
            private repository: TaskRepository
        ) {}
    execute(params: {id: string, isCompleted: boolean}): Observable<BaseResponse<boolean>> {
        return this.repository.updateTask(params);
    }
}

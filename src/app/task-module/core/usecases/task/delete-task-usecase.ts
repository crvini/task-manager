import { Observable } from "rxjs";
import { BaseResponse } from "../../interfaces/base-response";
import { UseCase } from "../use-case";
import { TaskRepository } from "../../repositories/task/task-repository";

export class DeleteTaskUsecase implements UseCase<string,BaseResponse<boolean>>{
    constructor(
        private repository: TaskRepository
    ) {}
    execute(params: string): Observable<BaseResponse<boolean>> {
        return this.repository.deleteTask(params);
    }
}

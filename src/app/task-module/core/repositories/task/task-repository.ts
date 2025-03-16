import { Observable } from "rxjs";
import { BaseResponse } from "../../interfaces/base-response";
import { Task } from "../../interfaces/task/task";

export abstract class TaskRepository {
    abstract createTask(params: Task): Observable<BaseResponse<string>>;
    abstract updateTask(params: { id: string, isCompleted: boolean }): Observable<BaseResponse<boolean>>;
    abstract deleteTask(id: string): Observable<BaseResponse<boolean>>;
    abstract getTasks(): Observable<BaseResponse<Task[]>>;
    abstract getFilteredTasks(filter: string): Observable<BaseResponse<Task[]>>;

}

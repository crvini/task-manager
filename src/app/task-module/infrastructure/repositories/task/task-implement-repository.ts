import { Injectable } from "@angular/core";
import { environment } from "../../../../../environments/environment";
import { TaskRepository } from "../../../core/repositories/task/task-repository";
import { catchError, EMPTY, Observable, tap, map } from "rxjs";
import { BaseResponse } from "../../../core/interfaces/base-response";
import { Task } from "../../../core/interfaces/task/task";
import { HttpClient } from "@angular/common/http";
const TASK_BASE_URL = environment.taskUrl;

@Injectable({
    providedIn: 'root'
})
export class TaskImplementRepository extends TaskRepository {
    constructor(private http: HttpClient) {
        super();
    }
    override createTask(params: Task): Observable<BaseResponse<string>> {
        return this.http
            .post<any>(`${TASK_BASE_URL}/api/Tasks`, params)
            .pipe(
                tap((res: any) => {

                }),
                catchError((error) => {

                    return EMPTY;
                })
            );
    }
    override updateTask(params: { id: string, isCompleted: boolean }): Observable<BaseResponse<boolean>> {

        return this.http
            .patch<any>(`${TASK_BASE_URL}/api/Tasks/${params.id}`, params)
            .pipe(
                tap((res: any) => {

                }),
                catchError((error) => {

                    return EMPTY;
                })
            );
    }
    override deleteTask(id: string): Observable<BaseResponse<boolean>> {
        return this.http
            .delete<any>(`${TASK_BASE_URL}/api/Tasks/${id}`,)
            .pipe(
                tap((res: any) => {

                }),
                catchError((error) => {

                    return EMPTY;
                })
            );
    }
    override getTasks(): Observable<BaseResponse<Task[]>> {
        return this.http
            .get<any>(`${TASK_BASE_URL}/api/Tasks`)
            .pipe(
                tap((res: any) => {

                }),
                catchError((error) => {

                    return EMPTY;
                })
            );
    }
    getFilteredTasks(filter: string): Observable<BaseResponse<Task[]>> {
        return this.getTasks().pipe(
            map((response) => {
                let filteredTasks = response.data;
                if (filter === "completed") {
                    filteredTasks = response.data.filter(task => task.status); // Cambiar a 'status'
                } else if (filter === "pending") {
                    filteredTasks = response.data.filter(task => !task.status); // Cambiar a 'status'
                }
                return { ...response, data: filteredTasks };
            })
        );
    }


}

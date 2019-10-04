import { Injectable, NotFoundException } from '@nestjs/common';
import { TaskStatus } from './task-status.enum';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTaskFilterDto } from './get-task-filter.dto';

@Injectable()
export class TasksService {
    // getAllTasks(): Task[] {
    //     return this.tasks;
    // }
    // getTasksWithFilter(filterDto: GetTaskFilterDto): Task[] {
    //     const {status, search} = filterDto;
    //     let tasks = this.getAllTasks();
    //     if (status) {
    //         tasks = tasks.filter(task => task.status === status);
    //     }
    //     if (search) {
    //         tasks = tasks.filter(task =>
    //             task.title.includes(search) ||
    //             task.description.includes(search),
    //             );
    //     }
    //     return tasks;
    // }
    // getTaskById(id: string): Task {
    //     const found = this.tasks.find(el => el.id === id);
    //     if (!found) {
    //         throw new  NotFoundException(`Task with id: ${id} does not found`);
    //     }
    //     return found;
    // }
    // createTask(createTaskDto: CreateTaskDto): Task {
    //     const { title, description} = createTaskDto;
    //     const task: Task = {
    //         id: uuid(),
    //         title,
    //         description,
    //         status: TaskStatus.OPEN,
    //     };
    //     this.tasks.push(task);
    //     return task;
    // }
    // deleteTask(id: string) {
    //     const found = this.getTaskById(id);
    //     this.tasks = this.tasks.filter(el => el.id !== found.id);
    // }
    // updateStatus(id: string, status: TaskStatus) {
    //     const task = this.getTaskById(id);
    //     task.status = status;
    //     return task;
    // }
}

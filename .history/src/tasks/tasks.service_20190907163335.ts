import { Injectable, NotFoundException } from '@nestjs/common';
import { TaskStatus } from './task-status.enum';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTaskFilterDto } from './get-task-filter.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskRepository } from './task.repository';
import { Task } from './task.entity';

@Injectable()
export class TasksService {
    constructor(@InjectRepository(TaskRepository) private taskRepository: TaskRepository) {

    }
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
    async getTaskById(id: number): Promise<Task> {
        const found = await this.taskRepository.findOne(id);
        if (!found) {
            throw new NotFoundException(`Task with id: ${id} does not found`);
        }
        return found;
    }
    async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
        this.taskRepository.creaqteTask(createTaskDto);

    }
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

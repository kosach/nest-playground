import { Injectable, NotFoundException } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import * as uuid from 'uuid/v1';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TasksService {
    private tasks: Task[] = [
        {
            id: 'ae1178c0-d145-11e9-bdcd-6f4e92eb262e',
            title: 'Test',
            description: 'Task',
            status: TaskStatus.OPEN,
        },
    ];

    getAllTasks(): Task[] {
        return this.tasks;
    }
    getTasksWithFilter(){
        
    }
    getTaskById(id: string): Task { 
        const found = this.tasks.find(el => el.id === id);
        if (!found) {
            throw new  NotFoundException(`Task with id: ${id} does not found`);
        }
        return found;
    }
    createTask(createTaskDto: CreateTaskDto): Task {
        const { title, description} = createTaskDto;
        const task: Task = {
            id: uuid(),
            title,
            description,
            status: TaskStatus.OPEN,
        };
        this.tasks.push(task);
        return task;
    }
    deleteTask(id: string) {
        const found = this.getTaskById(id);
        this.tasks = this.tasks.filter(el => el.id !== found.id);
    }
    updateStatus(id: string, status: TaskStatus) {
        const task = this.getTaskById(id);
        task.status = status;
        return task;
    }
}

import { Controller, Get, Post, Body, Param, Delete, Patch, UsePipes, ValidationPipe } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task, TaskStatus } from './task.model';
import { CreateTaskDto } from './dto/create-task.dto';

@Controller('tasks')
export class TasksController {
    constructor(private taskService: TasksService  ){}
    @Get()
    getAllTasks(): Task[] {
        return this.taskService.getAllTasks();
    }
    @Get('/:id')
    getTaskById(@Param('id') id: string): Task {
        return this.taskService.getTaskById(id)
    }
    @Post()
    @UsePipes(ValidationPipe)
    createTask(@Body() createTaskDto: CreateTaskDto): Task{
        return this.taskService.createTask(createTaskDto);
    }
    @Delete('/:id')
    deleteTask(@Param('id') id: string){
        this.taskService.deleteTask(id);
    }

    @Patch('/:id/status')
    updateStatus(
        @Param() id: string,
        @Body() status: TaskStatus,
    ){
        return this.taskService.updateStatus(id, status);
    }
}

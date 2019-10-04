import { Controller, Get, Post, Body, Param, Delete, Patch, UsePipes, ValidationPipe, Query, ParseIntPipe, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { TasksService } from './tasks.service';
import { TaskStatus } from './task-status.enum';
import { CreateTaskDto } from './dto/create-task.dto';
import { TaskStatusValidationPipe } from './pipes/task-status-validation.pipe';
import { GetTaskFilterDto } from './get-task-filter.dto';
import { Task } from './task.entity';
import { GetUser } from '../auth/get-user.decorator';
import { User } from '../auth/user.entity';

@Controller('tasks')
@UseGuards(AuthGuard())
export class TasksController {
    constructor(private taskService: TasksService  ) {}
    @Get()
    getAllTasks(
        @Query(ValidationPipe) filterDto: GetTaskFilterDto,
        @GetUser() user: User,
        ): Promise<Task[]> {
        return this.taskService.getTasks(filterDto, user);
    }
    @Get('/:id')
    getTaskById(
            @Param('id', ParseIntPipe) id: number,
            @GetUser() user: User,
            ): Promise<Task> {
        return this.taskService.getTaskById(id, user);
    }
    @Post()
    @UsePipes(ValidationPipe)
    createTask(
        @Body() createTaskDto: CreateTaskDto,
        @GetUser() user: User,
        ): Promise<Task> { 
        return this.taskService.createTask(createTaskDto, user);
    }
    @Delete('/:id')
    deleteTask(@Param('id', ParseIntPipe) id: number) {
        return this.taskService.deleteTask(id);
    }

    @Patch('/:id/status')
    updateStatus(
        @Param('id', ParseIntPipe) id: number,
        @Body('status', TaskStatusValidationPipe) status: TaskStatus,
        @GetUser() user: User,
    ): Promise<Task> {
        return this.taskService.updateStatus(id, status, user);
    }
}

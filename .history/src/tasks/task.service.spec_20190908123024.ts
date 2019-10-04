import {Test} from '@nestjs/testing';
import { TasksService } from './tasks.service';
import { TaskRepository } from './task.repository';
import { GetTaskFilterDto } from './get-task-filter.dto';
import { TaskStatus } from './task-status.enum';

const mockTaskRepository = () => ({
    getTasks: jest.fn(),
});

describe('TaskService', () =>{
    let taskService;
    let taskRepository;

    beforeEach(async() => {
        const module = await Test.createTestingModule({
            providers: [
                TasksService,
                {provide: TaskRepository, useFactory: mockTaskRepository},
            ],
        }).compile();

        taskService = await module.get<TasksService>(TasksService);
        taskRepository =  await module.get<TaskRepository>(TaskRepository);
    });

    describe('getTasks', () => {
        it('get all tasks from the reposytory', () => {
            expect(taskRepository.getTasks).not.toHaveBeenCalled();
            const filters: GetTaskFilterDto = {
                status: TaskStatus.IN_PROGRESS,
                search: 'Search query',
            };
            taskService.getTasks()
        });
    });
});

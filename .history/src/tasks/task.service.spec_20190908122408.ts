import {Test} from '@nestjs/testing';
import { TasksService } from './tasks.service';
import { TaskRepository } from './task.repository';

const mockTaskRepository = () => ({

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
});

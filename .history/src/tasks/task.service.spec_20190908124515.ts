import {Test} from '@nestjs/testing';
import { TasksService } from './tasks.service';
import { TaskRepository } from './task.repository';
import { GetTaskFilterDto } from './get-task-filter.dto';
import { TaskStatus } from './task-status.enum';

const mockUser = {id: 12, username: 'test'};
const mockTaskRepository = () => ({
    getTasks: jest.fn(),
    findOne: jest.fn(),
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
        it('get all tasks from the repository', async () => {
            taskRepository.getTasks.mockResolvedValue('Some Value');
            expect(taskRepository.getTasks).not.toHaveBeenCalled();
            const filters: GetTaskFilterDto = {
                status: TaskStatus.IN_PROGRESS,
                search: 'Search query',
            };
            const result = await taskService.getTasks(filters, mockUser);
            expect(taskRepository.getTasks).toHaveBeenCalled();
            expect(result).toEqual('Some Value');

        });
    });

    describe('getTaskById', () => {
        it('calls to taskRepository.findOne() and succesffuly retrievee and return the task', async () => {
            const mockTask = { title: 'Title', description: 'Test' };
            taskRepository.findOne.mockResolvedValue(mockTask);
            const result = await taskService.getTaskById(1, mockUser);
            expect(result).toEqual(mockTask);
            expect(taskRepository.findOne).toHaveBeenCalledWith({
                where: {
                    id: 1,
                    userId: mockUser.id,
                }
            })
        })
        it('throws an error as task is not found', () => {})
    })
});

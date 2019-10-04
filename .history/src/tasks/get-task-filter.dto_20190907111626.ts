import { TaskStatus } from './task.model';
import { IsOptional } from 'class-validator';

export class GetTaskFilterDto {
    @IsOptional()
    status: TaskStatus;
    @IsOptional()
    search: string;
}

import { PipeTransform } from "@nestjs/common";
import { TaskStatus } from "../task.model";

export class TaskStatusValidationPipe implements PipeTransform {
    readonly allowedStatuses = [
        TaskStatus.OPEN,
        TaskStatus.IN_PROGRESS,
        TaskStatus.DONE,
    ]
    transform(value: any) {
        value = value.toUpperCase();
        return value;
    }
    private isStatusValid(status: any): boolean{
        return this.allowedStatuses.includes(status);
    }
}

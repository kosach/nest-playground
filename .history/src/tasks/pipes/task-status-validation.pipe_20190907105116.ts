import { PipeTransform } from "@nestjs/common";
import { TaskStatus } from "../task.model";

export class TaskStatusValidationPipe implements PipeTransform {
    readonly allowedStatuses = [
        TaskStatus.OPEN,
        TaskStatus.PROGRESS,
        TaskStatus.DONE,
    ]
    transform(value: any) {
        return value;
    }
}

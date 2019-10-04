import { PipeTransform } from "@nestjs/common";

export class TaskStatusValidationPipe implements PipeTransform{
    transform(value: any) {
        console.log('TCL: TaskStatusValidationPipe -> transform -> value', value);
        return value;
    }
}

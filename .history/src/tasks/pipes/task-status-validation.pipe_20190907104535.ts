import { PipeTransform, ArgumentMetadata } from "@nestjs/common";

export class TaskStatusValidationPipe implements PipeTransform{
    transform(value: any, metadata: ArgumentMetadata) {
        console.log('TCL: TaskStatusValidationPipe -> transform -> value', value)
        console.log('TCL: TaskStatusValidationPipe -> transform -> metadata', metadata)
        return value;
    }
}
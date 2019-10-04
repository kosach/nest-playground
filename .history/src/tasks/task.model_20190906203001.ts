export interface Task {
    id: string;
    title: string;
    description: string;
    status:;
}

export enum TaskStatus {
    OPEN = 'OPEN',
    PROGRESS = 'PROGRESS',
    DONE = 'DONE',
}

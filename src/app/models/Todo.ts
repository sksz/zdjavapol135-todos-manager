export class Todo {
    public id?: number;
    public title: string;
    public completed: boolean;

    public constructor(
        title: string,
        completed: boolean
    ) {
        this.title = title;
        this.completed = completed;
    }
}

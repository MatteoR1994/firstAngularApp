class Task {
    
    name: string;
    creationDate: Date;
    doneDate: Date;
    priority: string;
    tag: string;
    comment: string;
    repeat: string;
    date: Date;

    constructor(name: string, creationDate: Date, doneDate: Date, priority: string, tag: string, comment: string, repeat: string, date: Date) {
        this.name = name;
        this.creationDate = creationDate;
        this.doneDate = doneDate;
        this.priority = priority;
        this.tag = tag;
        this.comment = comment;
        this.repeat = repeat;
        this.date = date;
    }

}
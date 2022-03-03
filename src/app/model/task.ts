export class Task {

  id: string;
  name: string;
  comment?: string;

  tag?: string[];

  creationDate: Date;
  doneDate?: Date;
  dueDate?: Date;

  priority: number;
  repeat?: number;

  constructor(name: string, priority: number = 0) {
    this.name = name;
    this.priority = priority;
    this.creationDate = new Date(); // Prende la data di adesso, di quando viene creato l'oggetto.
    this.id = name.split(' ')[0] + Task.generateRandom();
  }

  static generateRandom(): number {
    return Math.floor(Math.random() * 1000000);
  }

}

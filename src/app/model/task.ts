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

  constructor(id:string ,name: string, priority: number = 0,creationDate?:number){
    this.name = name;
    this.priority = Task.getFirstNumber(priority)
    if(creationDate){
      this.creationDate = new Date(creationDate) ; 
    }else{
      this.creationDate= new Date();
    }
    this.creationDate = new Date();
    this.id = id;
  }


  static getFirstNumber(fullNumber:number):number{

    const stringNumber = String(fullNumber);
    const firstChar = stringNumber.charAt(0);
    const firstCharNumber = Number(firstChar);

   return firstCharNumber;

   
  }
  // static generateRandom(): number{
  //   return Math.floor(Math.random() * 1000000);
  // }

}

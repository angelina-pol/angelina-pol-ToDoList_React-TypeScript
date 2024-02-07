import { makeAutoObservable } from "mobx";

class Todo {
  task: string = '';
  time: string = '';
  isCompleted: boolean = false;

  constructor() {
      makeAutoObservable(this)
  }
};

export default Todo;
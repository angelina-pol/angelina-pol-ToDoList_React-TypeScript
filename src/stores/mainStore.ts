import { computed, makeObservable, observable } from "mobx";

type StateTask =  {
  task: string;
  time: string;
  isCompleted: boolean; 
}

type PrivateField = "_isVisibleAddModal" | "_isVisibleUpdateModal" | "_task" | "_tasks";

class MainStore {
  private _isVisibleAddModal = false;
  private _isVisibleUpdateModal = false;
  private _task = '';
  private _tasks: StateTask[] = [];

  constructor() {
    makeObservable<MainStore, PrivateField>(this, {
      tasks: computed,
      _tasks: observable,
      isVisibleAddModal: computed,
      _isVisibleAddModal: observable,
      isVisibleUpdateModal: computed,
      _isVisibleUpdateModal: observable,
      task: computed,
      _task: observable,
    });
  };

  get tasks() {
    return this._tasks;
  }

  set tasks(value: StateTask[]) {
    this._tasks = value;
  };

  get isVisibleAddModal() {
    return this._isVisibleAddModal;
  };

  set isVisibleAddModal(value: boolean) {
    this._isVisibleAddModal = value;
  };

  get isVisibleUpdateModal() {
    return this._isVisibleUpdateModal;
  };

  set isVisibleUpdateModal(value: boolean) {
    this._isVisibleUpdateModal = value;
  };

  get task() {
    return this._task;
  };

  set task(value: string) {
    this._task = value;
  };
};

const store = new MainStore();

export default store;

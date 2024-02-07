import { computed, makeObservable, observable } from "mobx";
import { ChangeEvent, MouseEvent } from "react";

type StateTask = {
  task: string;
  time: string;
  isCompleted: boolean;
}

type PrivateField = 
  | "_isVisibleAddModal"
  | "_isVisibleUpdateModal"
  | "_task"
  | "_tasks"
  | "tasks"
  | "_currentlyEditedTaskId"
  | "_isCompletedTask"
  | "_displayTasks";

class MainStore {
  private _isVisibleAddModal = false;
  private _isVisibleUpdateModal = false;
  private _task = '';
  private _tasks: StateTask[] = [];
  private _currentlyEditedTaskId = '';
  private _isCompletedTask = false;
  private _displayTasks: 'All' | 'Incomplete' | 'Complete' = 'All';

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
      currentlyEditedTaskId: computed,
      _currentlyEditedTaskId: observable,
      isCompletedTask: computed,
      _isCompletedTask: observable,
      displayTasks: computed,
      _displayTasks: observable,
      filteredTasks: computed,
    });
  };

  private get tasks() {
    return this._tasks;
  }

  private set tasks(value: StateTask[]) {
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

  get currentlyEditedTaskId() {
    return this._currentlyEditedTaskId;
  };

  set currentlyEditedTaskId(value: string) {
    this._currentlyEditedTaskId = value;
  };

  get isCompletedTask() {
    return this._isCompletedTask;
  };

  set isCompletedTask(value: boolean) {
    this._isCompletedTask = value;
  };

  get displayTasks() {
    return this._displayTasks;
  };

  set displayTasks(value: 'All' | 'Incomplete' | 'Complete') {
    this._displayTasks = value;
  };

  get filteredTasks() {
    return this.tasks
      .filter(this.filterTasks)
  }

  onEditStart = (id: string) => {
    this.isVisibleUpdateModal = true;
    this.currentlyEditedTaskId = id;
  };

  onInputTask = (e: ChangeEvent<HTMLInputElement>) => {
    this.task = e.target.value;
  };

  onRemoveTask = (e: MouseEvent<HTMLButtonElement>) => {
    this.tasks = this.tasks.filter(task => task.time !== e.currentTarget.id);
  };

  onAddTask = () => {
    const obj = {
      task: this.task,
      time: timeAddTask(),
      isCompleted: this.isCompletedTask,
    };
    this.tasks.push(obj);
    this.isVisibleAddModal = false;
    this.isCompletedTask = false;
  };

  onChecked = (checked: boolean, id: string) => {
    const editedTask = this.tasks.filter(obj => obj.time === id)[0];
    const indexForChange = this.tasks.indexOf(editedTask);
    this.tasks.splice(indexForChange, 1, { ...editedTask, isCompleted: checked });
  };

  onDisplayTasks = (e: ChangeEvent<HTMLSelectElement>) => {
    this.displayTasks = e.target.value as "All" | "Incomplete" | "Complete";
  };

  filterTasks = (el: any) => {
    if (this.displayTasks === 'Incomplete') {
      return !el.isCompleted;
    };
    if (this.displayTasks === 'Complete') {
      return el.isCompleted;
    };
    return true;
  };

  onStatusTask = (e: ChangeEvent<HTMLSelectElement>) => {
    this.isCompletedTask = (
      e.target.value === "Complete"
        ? true
        : false
    );
  };

  onEditEnd = () => {
    const editedTask = this.tasks.filter(obj => obj.time === this.currentlyEditedTaskId)[0];
    const indexForChange = this.tasks.indexOf(editedTask);
    this.tasks.splice(indexForChange, 1, { task: this.task, time: this.currentlyEditedTaskId, isCompleted: this.isCompletedTask });
    this.isVisibleUpdateModal = false;
  };

  currentlyEditedTask = () => {
    const currentlyObj = this.tasks.find(el => el.time === this.currentlyEditedTaskId);
    if (typeof (currentlyObj) === 'object') {
      return currentlyObj.task;
    };
  };

  currentlyEditedStatus = () => {
    const currentlyObj = this.tasks.find(el => el.time === this.currentlyEditedTaskId);
    if (typeof (currentlyObj) === 'object') {
      return currentlyObj.isCompleted ? "Complete" : "Incomplete";
    };
  };
};

const timeAddTask = () => {
  const { DateTime } = require("luxon");
  const dt = DateTime.now();
  return dt.toLocaleString(DateTime.DATETIME_MED) + ':' + dt.second;
};

const store = new MainStore();

export default store;

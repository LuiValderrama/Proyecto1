import { Component, OnDestroy, OnInit } from '@angular/core';

interface Task {
  done: boolean,
  title: string
}

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.scss']
})
export class TodoCardComponent implements OnInit, OnDestroy {

  title = 'TodoApp';

  tasks: Array<Task> = [];

  inputTask = 'Nueva tarea';

  constructor() {
  }

  ngOnInit(): void {
    this.tasks.push({ title: 'Tarea Realiza', done: false});
    this.tasks.push({ title: 'Tarea por Realizarce', done: true});

  }

  ngOnDestroy() {

  }

  addTask() {
    this.tasks.push({ title: this.inputTask, done: false});
  }

  deleteTask(task: Task) {
    // TODO(HACER EL ELIMINAR)
    console.log(`Eliiminando ${task}`)
  }
}

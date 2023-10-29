import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

export interface Task {
  description: string;
  completed: boolean;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  tasks: Task[] = [];
  taskInput: string = '';
  addButtonLabel: string = 'Add Task';
  userFirstName!: string;
  editDialogVisible: boolean = false;
  editedTaskDescription: string = '';
  selectedTask: Task | null = null;

  constructor(private authService: AuthService) {}

  ngOnInit() {
  }

  addTask() {
    if (this.taskInput.trim()) {
      const newTask: Task = {
        description: this.taskInput,
        completed: false
      };
      this.tasks.push(newTask);
      this.clearInput();
    }
  }

  deleteTask(task: Task) {
    const taskIndex = this.tasks.indexOf(task);
    if (taskIndex !== -1) {
      this.tasks.splice(taskIndex, 1);
      this.clearInput();
    }
  }

  toggleTaskCompletion(task: Task) {
    task.completed = !task.completed;
  }

  isTaskCompleted(task: Task): boolean {
    return task.completed;
  }

  clearInput() {
    this.selectedTask = null;
    this.taskInput = '';
    this.addButtonLabel = 'Add Task';
    this.editDialogVisible = false;
  }

  showEditDialog(task: Task) {
    this.selectedTask = task;
    this.editedTaskDescription = task.description;
    this.editDialogVisible = true;
  }

  updateTask(task: Task | null) {
    if (task !== null && this.editedTaskDescription.trim()) {
      task.description = this.editedTaskDescription;
      this.clearInput();
    }
  }
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Habit } from './models/habit.model';
import { MatCardModule } from '@angular/material/card';
import { NgFor, NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    NgFor,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    NgIf,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'lab5';

  public adding: boolean = false;
  public editing: boolean = false;
  public editingIndex: number = 0;

  public habits: Habit[] = [
    new Habit("Заниматься", "Ежедневно", "Нужно постоянно саморазвиваться"),
    new Habit("Делать упражнения", "Еженедельно", "Нужно развивать не только ум, но и тело")
  ];

  public habitForm = new FormGroup({
    name: new FormControl(''),
    frequency: new FormControl(''),
    description: new FormControl(''),
  });

  public onSubmit() {
    const habit = this.habitForm.value as Habit;

    if (this.editing) {
      this.habits.splice(this.editingIndex, 1, habit);
    } else if (this.adding) {
      this.habits.push(habit);
    }

    this.exitForm();
  }

  public exitForm() {
    this.adding = false;
    this.editing = false;
    this.habitForm.reset();
  }

  public setEditForm(habit: Habit, index: number) {
    this.habitForm.patchValue({
      name: habit.name,
      frequency: habit.frequency,
      description: habit.description,
    });
    this.editing = true;
    this.adding = false;
    this.editingIndex = index;
  }

  public onDelete(index: number) {
    this.habits.splice(index, 1);
  }
}

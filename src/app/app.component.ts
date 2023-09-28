import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todoItems = [
    { activity: 'Swimming', completed: false },
    { activity: 'Breakfast', completed: false },
    { activity: 'Office', completed: false },
    { activity: 'Workout', completed: false },
    { activity: 'Dinner', completed: false }
  ];

  newItem: string = '';

  addItem() {
    if (this.newItem.trim() !== '') {
      this.todoItems.push({ activity: this.newItem, completed: false });
      this.newItem = '';
    }
  }
  swimmingVenue = 'Marena SMIT';
}
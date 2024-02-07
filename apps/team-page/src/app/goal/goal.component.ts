import { Component } from '@angular/core';

@Component({
  selector: 'mas-goal',
  standalone: true,
  imports: [],
  template: `
    <div class="flex flex-col">
      <h2 class="text-2xl font-bold mb-3">Project Goal</h2>
      <p class="mb-3">
        The goal of this project for the spring 2024 semester is to get more of an outreach and families signing up to
        participate in the program.
      </p>
    </div>
  `,
  styles: `
    :host {
      display: block;
    }
  `,
})
export default class GoalComponent {}

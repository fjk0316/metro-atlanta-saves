import { Component } from '@angular/core';

@Component({
  selector: 'mas-lighthouse',
  standalone: true,
  imports: [],
  template: `
    <div class="flex flex-col">
      <h2 class="text-2xl font-bold mb-3">Lighthouse Report</h2>
      <img src="assets/lighthouse/2024-02-06.png" width="350px" />
    </div>
  `,
  styles: `
    :host {
      display: block;
    }
  `,
})
export default class LighthouseComponent {}

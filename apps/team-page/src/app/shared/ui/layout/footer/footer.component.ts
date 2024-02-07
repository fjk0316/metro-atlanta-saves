import { Component } from '@angular/core';

@Component({
  selector: 'mas-footer',
  standalone: true,
  imports: [],
  template: `
    <p>footer works!</p>
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
})
export class FooterComponent {}

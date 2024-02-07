import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './shared/ui/layout/layout.component';

@Component({
  standalone: true,
  imports: [RouterModule, LayoutComponent],
  selector: 'mas-root',
  template: `
    <mas-layout>
      <router-outlet />
    </mas-layout>
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
})
export class AppComponent {
  title = 'team-page';
}

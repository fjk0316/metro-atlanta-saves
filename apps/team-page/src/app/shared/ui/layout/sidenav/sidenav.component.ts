import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

type Nav = {
  name: string;
  routerLink: string;
};
@Component({
  selector: 'mas-sidenav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <div class="flex flex-col">
      @for (item of navItems(); track item.name) {
      <a class="nav-item p-2" routerLinkActive="active" [routerLink]="item.routerLink">{{ item.name }}</a>
      }
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
      }

      .nav-item:not(.active) {
        border-bottom: 2px solid transparent;
      }
      .active {
        border-bottom: 2px solid grey;
      }
    `,
  ],
})
export class SidenavComponent {
  navItems = signal<Nav[]>([
    { name: 'Home', routerLink: '/home' },
    { name: 'Team', routerLink: '/team' },
    { name: 'Project Goal', routerLink: '/goal' },
    { name: 'Lighthouse Report', routerLink: '/lighthouse' },
  ]);
}

import { Component, signal } from '@angular/core';
import { NavComponent } from './nav/nav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SidenavComponent } from './sidenav/sidenav.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'mas-layout',
  standalone: true,
  imports: [CommonModule, NavComponent, MatSidenavModule, SidenavComponent],
  template: `
    <mas-nav (openNav)="drawer.toggle()" />
    <mat-drawer-container class="example-container" autosize>
      <mat-drawer #drawer class="example-sidenav" mode="side">
        <mas-sidenav />
      </mat-drawer>
      <main class="p-5">
        <ng-content />
      </main>
    </mat-drawer-container>
  `,
  styles: [
    `
      :host {
        display: block;
        background-color: red;
      }
      .example-container {
        display: block;
        min-height: calc(100dvh - 56px);
        height: 100%;
        border: 1px solid rgba(0, 0, 0, 0.5);

        @media screen and (min-width: 600px) {
          min-height: calc(100dvh - 64px);
        }
      }

      .example-sidenav-content {
        display: flex;
        height: 100%;
        align-items: center;
        justify-content: center;
      }

      .example-sidenav {
        padding: 20px;
      }
    `,
  ],
})
export class LayoutComponent {
  isSidenavOpen = signal(false);

  logMessage() {
    console.log('HERE');
  }
}

import { Component, EventEmitter, Output } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatIconAnchor, MatIconButton } from '@angular/material/button';
import { MatToolbar } from '@angular/material/toolbar';

@Component({
  selector: 'mas-nav',
  standalone: true,
  imports: [MatToolbar, MatIcon, MatIconButton, MatIconAnchor],
  template: `
    <mat-toolbar>
      <button
        mat-icon-button
        class="example-icon"
        aria-label="Example icon-button with menu icon"
        (click)="openNav.emit()"
      >
        <mat-icon>menu</mat-icon>
      </button>
      <h1 class="!ml-4">Metro Atlanta Saves Team Page</h1>
      <a
        class="ml-auto"
        mat-icon-button
        aria-label="Link to github repo"
        href="https://github.com/theNEXlevel/metro-atlanta-saves"
        target="_blank"
      >
        <mat-icon>code</mat-icon>
      </a>
    </mat-toolbar>
  `,
  styles: [
    `
      :host {
        display: block;
      }
      .example-spacer {
        flex: 1 1 auto;
      }
    `,
  ],
})
export class NavComponent {
  @Output() openNav = new EventEmitter<void>();
}

import { Component, signal } from '@angular/core';

type User = {
  name: string;
  experience: string;
  roles: string[];
  img: string;
};

@Component({
  selector: 'mas-team',
  standalone: true,
  imports: [],
  template: `
    <div class="flex flex-col">
      <h2 class="text-2xl font-bold mb-4">Team Members</h2>
      @for (user of users(); track user.name) {
      <div class="flex">
        <img class="rounded-full h-24 mr-4" [src]="user.img" width="auto" height="100px" />
        <div class="flex flex-col">
          <h2 class="text-lg font-bold mb-2">{{ user.name }}</h2>
          <p class="mb-2">Experience: {{ user.experience }}</p>
          <div class="flex">
            <h4 class="block text-lg font-bold mr-4">Roles:</h4>
            <ul class="block ml-4">
              @for (role of user.roles; track $index) {
              <li>{{ role }}</li>
              }
            </ul>
          </div>
        </div>
      </div>
      }
    </div>
  `,
  styles: `
    :host {
      display: block;
    }
  `,
})
export default class TeamComponent {
  users = signal<User[]>([
    {
      name: 'Justin McLellan',
      experience: '10+ years working in the industry with a focus on front-end architecture using Angular and Nx.',
      roles: ['Team Lead', 'Front-end Developer', 'Back-end Developer'],
      img: 'assets/team/justin-mclellan.jpg',
    },
    {
      name: 'Taimoor Chatha',
      experience: '7+ years working in the industry as a full stack developer using Angular, React, Java, C++, PHP, Python, MySQL and MongoDB.',
      roles: ['Front-end Developer', 'Back-end Developer'],
      img: 'assets/team/taimoor-chatha.jpg',
    },
    {
      name: 'Amadhya Anand',
      experience: '3+ years working in the industry with a focus on fullstack development using Flask, NodeJS, MySql, PostgreSQL, Firebase, and React',
      roles: ['Fullstack Developer'],
      img: 'assets/team/amadhya-anand.jpg',
    },
    {
      name: 'Jiankun Fan',
      experience: 'A few years working in Control system. Code beginner',
      roles: ['Front-end Developer', 'Back-end Developer'],
      img: 'assets/team/JiankunFan.jpg',
    }
  ]);
}

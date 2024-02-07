import { Component, inject } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'mas-home',
  standalone: true,
  imports: [],
  template: `
    <div class="flex flex-col">
      <h2 class="text-2xl font-bold mb-3">Project Description</h2>
      <h3 class="text-lg mb-2">Partner: United Way of Metro Atlanta</h3>
      <h3 class="text-lg mb-3">Partner Contact: Protip Biswas, Senior VP</h3>
      <p class="mb-3">
        The first step to financial stability and to wealth building is to have emergency savings. We all must save so
        we have resources to draw on when we are faced with unexpected expenses. Low income families and communities of
        color are most at risk of not having savings. Over 705 of Americans live paycheck to paycheck and over 35% would
        not be able to pay an unexpected $400 expense.
      </p>
      <p class="mb-3">
        Metro Atlanta Saves encourages savings for all families. We believe that different families have different
        approaches. We need to encourage financial education and for some families we need to incentivize them with a
        match.
      </p>
      <p class="mb-3">
        The challenge for this project is: How can we reach a large segment of the population with multiple strategies -
        virtually and digitally to reach different segments of the population? The tools and strategies the team comes
        up with will build on the portal a previous team built. The high-level goal is to educate many families, and
        make them aware of the importance of saving. We also want to succeed in having 1000 families that will save
        $1000 each.
      </p>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
})
export default class HomeComponent {
  metaService = inject(Meta);

  constructor() {
    this.metaService.addTag({ name: 'description', content: 'Metro Atlanta Saves Project Description' });
  }
}

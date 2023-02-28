import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <p
      style="display: flex; 
      align-items: center; 
      justify-content:center;
      font-size: 50px"
    >
      {{ value }}
    </p>
  `,
  styles: [],
})
export class SquareComponent {
  @Input() value: 'X' | 'O';
}

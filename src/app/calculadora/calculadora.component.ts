import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {
  num1: number = 0;
  num2: number = 0;
  result: number = 0;

  sumar(): void {
    this.result = this.num1 + this.num2;
  }

  restar(): void {
    this.result = this.num1 - this.num2;
  }
}

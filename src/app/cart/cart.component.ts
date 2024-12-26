import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  componentName = 'cart';
  btnDisabled = true;
  showText = '';
  item = '';

  constructor() {
    setTimeout(() => {
      this.btnDisabled = false;
    }, 2000);
  }

  getItem(event: any): void {
    this.showText = event.target.value;
    // alert(event?.target?.value);
  }
}

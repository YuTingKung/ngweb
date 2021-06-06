import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;
  num = 0;
  share() {
    window.alert('The product has been shared!');
  }

  vib()
  {
    navigator.vibrate(500);
    if (navigator.vibrate) {
      console.log('vib click');
      this.num += 1;
    } else {
      console.log('vib fail');
      this.num -= 1;
    }
  }
  

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-visit',
  templateUrl: './visit.page.html',
  styleUrls: ['./visit.page.scss'],
})
export class VisitPage implements OnInit {
  form: FormGroup;

  constructor(
    private location: Location,
    private formBuilder: FormBuilder
  ) { 
    this.form = this.formBuilder.group({
      orders: new FormArray([])
    });
    this.addCheckboxes();
  }

  private addCheckboxes() {
    this.ordersData.forEach((o, i) => {
      const control = new FormControl(i === 0); // if first item set to true, else false
      (this.form.controls.orders as FormArray).push(control);
    });
  }

  submit() {
    const selectedOrderIds = this.form.value.orders
      .map((v, i) => (v ? this.ordersData[i].id : null))
      .filter(v => v !== null);
    console.log(selectedOrderIds);
  }
  
  ordersData = [{
      id: 1,
      firstName: 'Роман',
      lastName: 'Москвин'
    }, {
      id: 2,
      firstName: 'Василина',
      lastName: 'Сибцова'
    }, {
      id: 3,
      firstName: 'Женя',
      lastName: 'Петроченко'
    }
  ]

  ngOnInit() {
  }

  back() {
    this.location.back();
  }

}

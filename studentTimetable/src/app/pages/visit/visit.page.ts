import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-visit',
  templateUrl: './visit.page.html',
  styleUrls: ['./visit.page.scss'],
})
export class VisitPage implements OnInit {
  form: FormGroup;
  selectedOrderIds: any;
  total: any;
  
  constructor(
    private location: Location,
    private formBuilder: FormBuilder,
    private router: Router,
  ) { 
    
  }

  private addCheckboxes() {
    this.ordersData.forEach((o, i) => {
      const control = new FormControl(i === 0); // if first item set to true, else false
      (this.form.controls.orders as FormArray).push(control);
    });
  }

  submit() {
    this.selectedOrderIds = this.form.value.orders.map((v, i) => (v ? this.ordersData[i].id : null)).filter(v => v !== null);
    this.total = this.selectedOrderIds.length;
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
    }, {
      id: 4,
      firstName: 'Василина',
      lastName: 'Сибцова'
    }, {
      id: 5,
      firstName: 'Женя',
      lastName: 'Петроченко'
    }, {
      id: 6,
      firstName: 'Василина',
      lastName: 'Сибцова'
    }, {
      id: 7,
      firstName: 'Женя',
      lastName: 'Петроченко'
    }, {
      id: 8,
      firstName: 'Василина',
      lastName: 'Сибцова'
    }, {
      id: 9,
      firstName: 'Женя',
      lastName: 'Петроченко'
    }, {
      id: 9,
      firstName: 'Женя',
      lastName: 'Петроченко'
    }
  ]

  ngOnInit() {
    this.form = this.formBuilder.group({
      orders: new FormArray([])
    });
    this.addCheckboxes();
  }

  back() {
    this.location.back();
  }
  
  goToWhy() {
    this.router.navigateByUrl('/cause');
  }

}

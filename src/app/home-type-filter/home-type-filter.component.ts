import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home-type-filter',
  templateUrl: './home-type-filter.component.html',
  styleUrls: ['./home-type-filter.component.less']
})
export class HomeTypeFilterComponent implements OnInit {
  form:FormGroup;

  @Output() applied = new EventEmitter();

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.form=this.formBuilder.group({
      Apartment:[],
      Room:[],
      House:[]
    })
  }

  submit(formvalue){
    const homeTypes =Object.keys(formvalue).filter(item=>
      formvalue[item]);

    this.applied.emit(homeTypes);
    // console.log(formvalue)
   
  }

}

import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  name = new FormControl('');
  firstName : string = '';
  adress : string = '';
  cp : string = '';
  phone : string = '';
  email : string = '';
  login : string = '';
  pwd : string = '';

  trueName : boolean = false;

  constructor() { }

  onClick(){
    
   }

  ngOnInit(): void {
  }

}

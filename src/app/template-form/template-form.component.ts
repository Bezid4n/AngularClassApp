import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  @ViewChild('f', {static:false}) myForm:NgForm |undefined
  defaultquiestion="pet";
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(form:NgForm){
    console.log(form);

  }

  suggestUsername(){
    if(this.myForm){
      this.myForm.form.patchValue({userData:{username:"admin"}})
    }
  }

  resetForm(){
    this.myForm?.reset();
  }

}

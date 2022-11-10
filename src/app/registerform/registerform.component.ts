import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.component.html',
  styleUrls: ['./registerform.component.scss']
})
export class RegisterformComponent implements OnInit {

  constructor() { }
  registerform !:any //form

  ngOnInit(): void {
    this.registerform =new FormGroup({
      "firstname":new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z]*')]),
      "lastname":new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z]*')]),
      "email":new FormControl(null,[Validators.required,Validators.email]),
      "mobile":new FormControl(null,[Validators.required,Validators.pattern('[0-9]*')]),
      
    })
  }
//submit function
submitData(){
console.log(this.registerform.value)
if(this.registerform.value){
  alert(`Thank You ${this.registerform.value.firstname}`)
}
this.registerform.reset() // reset Firm value
}
get firstname(){return this.registerform.get('firstname');} //firstname
get lastname(){return this.registerform.get('lastname');}// lastname
get email(){return this.registerform.get('email');} //email
get mobile(){return this. registerform.get('mobile')} //mobile
}


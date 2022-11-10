import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-newsform',
  templateUrl: './newsform.component.html',
  styleUrls: ['./newsform.component.scss']
})
export class NewsformComponent implements OnInit {
  editingIndex:any;
  editmode = false;
  UserUpdate = false;
// apiData !:any
  constructor(private fb:FormBuilder) { }
  newsform !: any
  apiData:any[]=[]
  ngOnInit(): void {
    this.newsform = new FormGroup({
      name: new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]*')]),
      email: new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('',[Validators.required,Validators.pattern('[0-9]*')])
    })
  }
submit(){
//   this.apiData.push(this.newsform.value)
//  console.log(this.newsform.value)
if(this.newsform.invalid){
  this.newsform.markAllAsTouched()
  return
}
if(this.editingIndex == 0 || this.editingIndex){
  this.apiData.splice(this.editingIndex,1,this.newsform.value)
console.log(this.editingIndex,1,this.newsform.value)
  this.editingIndex = null;
  // console.log(this.editingIndex=null)
  this.editmode=false
}else{
  this.apiData.push(this.newsform.value)
}
this.newsform.reset()
}
get name(){return this.newsform.get('name');}
get email(){return this.newsform.get('email');}
get password(){return this.newsform.get('password');}

delete(i:any){
this.apiData.splice(i,1)
}
edit(data:any,i:any){
  this.editmode=true
 this. editingIndex=i
  this.newsform.patchValue(data)
}
}



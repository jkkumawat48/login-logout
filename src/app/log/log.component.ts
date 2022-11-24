import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {NewsapiserviceService} from '../service/newsapiservice.service';
import { HttpClient } from '@angular/common/http';;
import { Router } from '@angular/router';
@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.scss']
})
export class LogComponent implements OnInit {
logform!: FormGroup
  
  constructor(private formBuilder:FormBuilder,
    private http:HttpClient,
    private router:Router,
    private newsapiservice:NewsapiserviceService) { }

  ngOnInit(): void {
    this.logform = this.formBuilder.group({
      username: new FormControl ('',[Validators.required,Validators.pattern('[a-zA-Z]*')]),
      email: new FormControl ('',[Validators.required]),
      password: new FormControl ('',[Validators.required,Validators.pattern('[0-9]*')])
    })
  }
log(){
  if(this.logform.invalid){
    this.logform.markAllAsTouched()
  }
const logApi = this.logform.value;
this.newsapiservice.register(logApi).subscribe(res =>{
  if(res.token){
    this.router.navigateByUrl('/navbar')
    alert("Login Succfully Data")
  }
})
}
get username(){return this.logform .get('username')}
get email(){ return this.logform .get('email')}
get password(){return this.logform.get('password')}
}

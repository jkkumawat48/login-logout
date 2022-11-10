import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {NewsapiserviceService} from '../service/newsapiservice.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-logregister',
  templateUrl: './logregister.component.html',
  styleUrls: ['./logregister.component.scss']
})
export class LogregisterComponent implements OnInit {
logregister!: FormGroup
  constructor(private formbuilder:FormBuilder,
    private http:HttpClient,
    private router:Router,
    private apiservicesservice:NewsapiserviceService) { }

  ngOnInit(): void {
    this.logregister = this.formbuilder.group({
      username: new FormControl('',[Validators.required]),
      email: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required)
    })
  }

 login(){
 if(this.logregister.invalid){
  this.logregister.markAllAsTouched()
 }
 const logApi =this.logregister.value;
 this.apiservicesservice.register(logApi).subscribe(res =>{
  if(res.token){
    this.router.navigateByUrl('/log')
  }
 })
}
}

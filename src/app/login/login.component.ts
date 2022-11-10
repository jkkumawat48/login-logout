import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router  } from '@angular/router';
import { HttpClient  } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  apiService: any;


  constructor(private fb:FormBuilder,
    private http:HttpClient,
    private router:Router) { }
loginform !: FormGroup
  ngOnInit(): void {
    this.loginform =this.fb.group({
      firstname: new FormControl(''),
      lastname: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl('')
    })
  }
  submitData(){
    if(this.loginform.invalid){
      this.loginform.markAllAsTouched()
    }else{
      const userDetails =this.loginform.value;
      this.apiService.addUser(userDetails).subscribe((res: { token: any; }) => {
        if(res.token){
          this.router.navigateByUrl('/navbar')
        }
      })
    }
  }
  log(){
    
  }
}
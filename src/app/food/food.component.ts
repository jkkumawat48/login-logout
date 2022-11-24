import { Component, OnInit } from '@angular/core';
import {NewsapiserviceService} from '../service/newsapiservice.service'
@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss']
})
export class FoodComponent implements OnInit {

  constructor(private _services:NewsapiserviceService) { }
foodDispaly:any[] | undefined
url:any
format:any
onSelectFile(event:any){
  const file = event.target.files && event.target.files[0];
  if(file){
    var reader = new FileReader();
    reader.readAsDataURL(file);
    if(file.type.indexOf('image')>-1){
      this.format ='image';
    }else if(file.type.indexOf('video')>-1){
      this.format ='video';
    }
    reader.onload =(event) =>{
      this.url =(<FileReader>event.target).result;
    }
  }
}
  ngOnInit(): void {
    this._services.food().subscribe((result)=>{
      this.foodDispaly = result.articles;
    })
  }

  
}

import { Component, OnInit } from '@angular/core';
import {NewsapiserviceService} from '../service/newsapiservice.service';
@Component({
  selector: 'app-technews',
  templateUrl: './technews.component.html',
  styleUrls: ['./technews.component.scss']
})
export class TechnewsComponent implements OnInit {

  constructor(private _services:NewsapiserviceService) { }

technewsDisplay:any=[];


  ngOnInit(): void {
    this._services.techNews().subscribe((result)=>{
this.technewsDisplay = result.articles;
    })
  }

}

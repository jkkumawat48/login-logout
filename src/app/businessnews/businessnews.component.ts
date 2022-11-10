import { Component, OnInit } from '@angular/core';
import {NewsapiserviceService} from '../service/newsapiservice.service';
@Component({
  selector: 'app-businessnews',
  templateUrl: './businessnews.component.html',
  styleUrls: ['./businessnews.component.scss']
})
export class BusinessnewsComponent implements OnInit {

  constructor(private _services:NewsapiserviceService) { }

businessnewsDispaly:any =[]

  ngOnInit(): void {
    this._services.businessNews().subscribe((result)=>{
      this.businessnewsDispaly = result.articles
    })
  }

}

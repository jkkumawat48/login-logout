import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NewsapiserviceService {

  constructor(private _http:HttpClient) { }
// news api url
NewsApiUrl="https://newsapi.org/v2/top-headlines?country=in&apiKey=1c5e2237fcd342bf86e1cc62c9d23654"

// technewsapiurl
techApiUrl="https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=1c5e2237fcd342bf86e1cc62c9d23654"

// businessnewsapiurl
businessApiUrl="https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=1c5e2237fcd342bf86e1cc62c9d23654"

registerApiUrl="https://ragister-api.herokuapp.com/api/register/"

// topheding()
topHeading():Observable<any>{
  return this._http.get(this.NewsApiUrl)
}

//techNews()
techNews():Observable<any>
{
  return this._http.get(this.techApiUrl)
}

// businessnewsapiurl
businessNews():Observable<any>
{
return this._http.get(this.businessApiUrl)
}

// register():Observable<any>{
//   return this._http.post(this.registerApiUrl)
// }

register(logApi:any):Observable<any>{
  return this._http.post<any>("https://ragister-api.herokuapp.com/api/register/", logApi).pipe(map(res => {
    console.log(res);
    return res;
  }));
}


}



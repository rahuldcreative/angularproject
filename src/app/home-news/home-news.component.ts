import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home-news',
  templateUrl: './home-news.component.html',
  styleUrls: ['./home-news.component.css']
})
export class HomeNewsComponent implements OnInit {

  
  constructor(private http: HttpClient) { }
  resdata;
  newsdata;
  ngOnInit(): void {
    const url ="http://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=6d7a60673e1a4f2a8efb7661b9b34849";
    this.http.get(url).subscribe(res=>{
     
      this.resdata=res;
      this.newsdata=this.resdata.articles ;
      console.log(this.newsdata)
    })
  }

}

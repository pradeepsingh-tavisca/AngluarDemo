import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-data',
  templateUrl: './stock-data.component.html',
  styleUrls: ['./stock-data.component.css']
})
export class StockDataComponent implements OnInit {

  constructor(private _httpClient:HttpClient) { }
  stockprice1:any="";
  stockprice2:any="";

  appInterval:any=null;
  stockColor:string="green";
  ngOnInit(): void {
    this.appInterval=setInterval(()=>{
      this._httpClient.get("https://priceapi.moneycontrol.com/pricefeed/bse/equitycash/IRC").subscribe((response:any)=>{
        if (this.stockprice1 != response.data.pricecurrent) {
          if (this.stockprice1 > response.data.pricecurrent) {
            this.stockColor = "red";
          } else {
            this.stockColor = "green";
          }
        }
        this.stockprice1 = response.data.pricecurrent;
      })
    }, 2000);
    this.appInterval=setInterval(()=>{
      this._httpClient.get("https://priceapi.moneycontrol.com/pricefeed/bse/equitycash/SG").subscribe((response:any)=>{
        if (this.stockprice2 != response.data.pricecurrent) {
          if (this.stockprice2 > response.data.pricecurrent) {
            this.stockColor = "red";
          } else {
            this.stockColor = "green";
          }
        }
        this.stockprice2 = response.data.pricecurrent;
      })
    }, 2000);
  }

  ngOnDestroy(){
    this.appInterval.unsubscribe()
  }

}

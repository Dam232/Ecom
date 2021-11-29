import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IPagination } from './models/pagination';
import { IProduct } from './models/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'Ecom Store';
  products: IProduct[];
  // constructor(private basketService: BasketService, private accountService: AccountService) { }

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    this.http.get('https://localhost:5001/api/products?pageSize=50')
      .subscribe((responce: IPagination) => {

          this.products =  responce.data;
        console.log(responce);


      }, error => {
        console.log(error);
      }


      );

  }
}

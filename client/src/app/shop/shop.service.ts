import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IBrand } from '../shared/models/brand';
import { IPagination } from '../shared/models/pagination';
import { IType } from '../shared/models/productType';
import { map, delay } from 'rxjs/operators';
import { ShopParams } from '../shared/models/ShopParams';
import { IProduct } from '../shared/models/product';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  baseUrl = 'https://localhost:5001/api/';
  // products: IProduct[] = [];
  // brands: IBrand[] = [];
  // types: IType[] = [];
  // pagination = new Pagination();
  // shopParams = new ShopParams();

  constructor(private http: HttpClient) { }

  getProducts(  shopParams:  ShopParams    )
  {
    let params =  new HttpParams();

    if (shopParams.brandId !==0) {
      params = params.append('brandid', shopParams.brandId.toString());   
     }

     if (shopParams.typeId !==0) {
      params = params.append('typeid', shopParams.typeId.toString());   
     }

     if (shopParams.search) {
      params = params.append('search', shopParams.search);
    }
    
      params = params.append('sort', shopParams.sort);   
      params = params.append('pageIndex', shopParams.pageNumber.toString());
      params = params.append('pageSize', shopParams.pageSize.toString());

     return this.http.get<IPagination>(this.baseUrl + 'products', { observe: 'response', params })  
     .pipe(
      map(response => {
        
        return response.body;
      })
    );
    
    }

    getProduct(id: number) {

      // const product = this.products.find(p => p.id === id);
      // if (product) 
      //{
      //   return of(product);
      // }
  
      return this.http.get<IProduct>(this.baseUrl + 'products/' + id);
    }

  getBrands() {
    // if (this.brands.length > 0) {
    //   return of(this.brands);
    // }
    // return this.http.get<IBrand[]>(this.baseUrl + 'products/brands').pipe(
    //   map(response => {
    //     this.brands = response;
    //     return response;
    //   })
    // );

    return this.http.get<IBrand[]>(this.baseUrl+'products/brands');
  }

  getTypes()
  {
    return this.http.get<IType[]>(this.baseUrl + 'products/types');
  }


  // getTypes() {
  //   // if (this.types.length > 0) {
  //   //   return of(this.types);
  //   // }
  //   return this.http.get<IType[]>(this.baseUrl + 'products/types').pipe(
  //   //   map(response => {
  //   //     this.types = response;
  //   //     return response;
  //   //   })
  //   // );
  // }

  // getProducts(useCache: boolean) {
  //   if (useCache === false) {
  //     this.products = [];
  //   }

  //   if (this.products.length > 0 && useCache === true) {
  //     const pagesReceived = Math.ceil(this.products.length / this.shopParams.pageSize);

  //     if (this.shopParams.pageNumber <= pagesReceived) {
  //       this.pagination.data =
  //         this.products.slice((this.shopParams.pageNumber - 1) * this.shopParams.pageSize,
  //           this.shopParams.pageNumber * this.shopParams.pageSize);

  //       return of(this.pagination);
  //     }
  //   }

  //   let params = new HttpParams();

  //   if (this.shopParams.brandId !== 0) {
  //     params = params.append('brandId', this.shopParams.brandId.toString());
  //   }

  //   if (this.shopParams.typeId !== 0) {
  //     params = params.append('typeId', this.shopParams.typeId.toString());
  //   }

  //   if (this.shopParams.search) {
  //     params = params.append('search', this.shopParams.search);
  //   }

  //   params = params.append('sort', this.shopParams.sort);
  //   params = params.append('pageIndex', this.shopParams.pageNumber.toString());
  //   params = params.append('pageSize', this.shopParams.pageSize.toString());

  //   return this.http.get<IPagination>(this.baseUrl + 'products', { observe: 'response', params })
  //     .pipe(
  //       map(response => {
  //         this.products = [...this.products, ...response.body.data];
  //         this.pagination = response.body;
  //         return this.pagination;
  //       })
  //     );
  // }





}

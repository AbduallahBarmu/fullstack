import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CartsService {

  constructor(private http:HttpClient) { }

  getAllCartsServ(){
    let params = new HttpParams()
    // params = params.append("startdate", param?.start).append("enddate", param?.end)
    return this.http.get(environment.baseApi + 'carts', {params}) // we need to send the param as an object 
  }

  deleteRecordServ(id:Number){
    return this.http.delete(environment.baseApi + 'carts/' + id)
  }

 
}

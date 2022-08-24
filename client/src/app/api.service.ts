import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) {
    console.log("In ApiService : Constructor invoked");
  }

  getEmpDetails(empNo:number):Promise<any> {
    let response:string;
    let httpClientVar=this.httpClient;
    let promise = new Promise(function(resolve, reject) {

      httpClientVar.get('http://localhost:8080/web-server/getEmpDetails/?empId='+empNo).subscribe((res)=>{
        response=res['responseData'];
        if(response){
       resolve(response);
        }else{
          reject(null);
        }
      });
    });
    return promise;
  }

  getAllEmp():Promise<any> {
    let response:[];
    let httpClientVar=this.httpClient;
    let promise = new Promise(function(resolve, reject) {

      httpClientVar.get('http://localhost:8080/web-server/getAllEmp').subscribe((res)=>{
        response=res['responseData'];
        if(response){
          resolve(response);
        }else{
          reject(null);
        }
      });
    });
    return promise;
  }
}

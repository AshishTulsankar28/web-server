import {Component} from '@angular/core';
import {ApiService} from "./api.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {

  title = "Live  ! ";
  employees=[{firstName:"Ashish",lastName:"Tulsankar"},{firstName:"Sanket",lastName:"Tulsankar"}];
  displayData:boolean=false;
  displayTab:boolean=false;
  empNo:number;
  receivedData:String;
  empData:[];

  constructor(private apiService: ApiService){
      console.log("AppComponent constructor init");
  }

  getEmpDetails(empNo:number) {

    if(Number(empNo)){
      this.apiService.getEmpDetails(empNo).then((res=>{
        this.receivedData=res['firstName']+' '+res['lastName'];
        this.displayData=true;
      }),(reason => {
        console.log("Is it rejected ? why ", reason);
        this.receivedData='';
        this.displayData=false;
      }))
    }else{
      window.alert("Enter Valid Employee ID");
    }

  }

  getAllEmp() {

      this.apiService.getAllEmp().then((res=>{
        this.empData=res;
        this.displayTab=true;
      }),(reason => {
        console.log("Is it rejected ? why ", reason);
        this.empData=null;
        this.displayTab=false;
      }))


  }

  hideEmpData() {
    this.displayTab=false;
  }
}

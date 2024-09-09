import { JsonPipe, NgClass } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardsDataService{
  public storagekey = 'formdata';
  public formdata : any  = [{
    Fname:"Eswar",
    Lname:"Palipalli",
    Email:"Palipallieswar6678@gmail.com",
    Dob:"12/07/2003",
    Gender:"Male",
    Description:"Hey There!",
  },{
    Fname:"Lakshman",
    Lname:"Patnana",
    Email:"Lakshmanamurthy@gmail.com",
    Dob:"12/12/2002",
    Gender:"Sigma male",
    Description:"Its simple!"
  }
  ]
  addFormData(newData: { Fname: string; Lname: string; Email: string; Dob: string; Gender: string; Description: string }) {
    this.formdata.push(newData);
    this.saveToLocalStorage();
  } 
  getFormData() {
    return this.formdata;
  }
  public saveToLocalStorage() {
    localStorage.setItem(this.storagekey, JSON.stringify(this.formdata));
  }
  constructor() {
    const data = localStorage.getItem(this.storagekey);
    if(data){
      this.formdata = JSON.parse(data);
    }
  }
}

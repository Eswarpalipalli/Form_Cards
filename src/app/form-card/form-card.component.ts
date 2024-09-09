import { trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import {CardsDataService} from '../cards-data.service';
@Component({
  selector: 'app-form-card',
  templateUrl: './form-card.component.html',
  styleUrls: ['./form-card.component.css']
})
export class FormCardComponent implements OnInit{
  public formdata :any[] = [];
  constructor(public forms : CardsDataService){}
  ngOnInit(): void {
    this.formdata = this.forms.getFormData();
  }
  onDelete(i:number){
    this.formdata = this.formdata.filter((val:any,index:number)=> index !== i);
    this.forms.saveToLocalStorage();
   }
}
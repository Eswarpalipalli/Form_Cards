import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog'
import { FormComponent } from './form/form.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CRUD';
  constructor(private dialog:MatDialog){}
  openform(){
    this.dialog.open(FormComponent);
  }
}

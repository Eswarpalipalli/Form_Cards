import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { FormCardComponent } from '../form-card/form-card.component';
import { CardsDataService } from '../cards-data.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  userForm: FormGroup;
  constructor(private fm: FormBuilder, public dialogRef: MatDialogRef<FormComponent>,public forms:CardsDataService) {
    this.userForm = this.fm.group({
      Fname: ["", [Validators.required, this.onlyTextValidator()]],
      Lname: ["", [Validators.required, this.onlyTextValidator()]],
      Email: ["", [Validators.required, Validators.email]],
      Dob: ["", Validators.required],
      Gender: ["", Validators.required],
      Description: ["", [Validators.required, Validators.minLength(10)]],
    });
  }
  onSubmit() {
    if (this.userForm.valid) {
      console.log(this.userForm.value.Fname);
      const newPerson = {
        Fname: this.userForm.value.Fname,
        Lname: this.userForm.value.Lname,
        Email: this.userForm.value.Email,
        Dob: this.formatDate(this.userForm.value.Dob),
        Gender: this.userForm.value.Gender,
        Description: this.userForm.value.Description
      };
      this.forms.addFormData(newPerson);
    } else {
      alert("OOPS! The Form is Invalid");
    }
    this.closeDialog();
  }
  closeDialog() {
    this.dialogRef.close();
  }
  onlyTextValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const valid = /^[a-zA-Z\s]*$/.test(control.value);
      return valid ? null : { onlyText: true };
    }
  }
  formatDate(date: Date): string {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-based
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
export class userdetails {
  public setdepartments: string = '';
  public setconfirmpassword: string = '';
  public setpassword: string = '';
  public setemail: string = '';
  public setusername: string = '';
  public setnumber: string = '';
  public setname: string = '';
}

@Component({
  selector: 'app-user-detail-form',
  templateUrl: './user-detail-form.component.html',
  styleUrls: ['./user-detail-form.component.scss'],
})
export class UserDetailFormComponent implements OnInit {
  userDetailsForm!: FormGroup;
  srcvisittype: any;
  searchoffice: any;
  setdepartments: any;
  setconfirmpassword: any;
  setpassword: any;
  setemail: any;
  setusername: any;
  setnumber: any;
  setname: any;
  pages: any;
  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.userDetailsForm = this.formBuilder.group({
      name: ['', Validators.required],
      number: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      departments: [[], Validators.required],
    });
  }

  Save() {
    const data: userdetails = new userdetails();
    data.setdepartments = this.setdepartments;
    data.setconfirmpassword = this.setconfirmpassword;
    data.setpassword = this.setpassword;
    data.setemail = this.setemail;
    data.setusername = this.setusername;
    data.setnumber = this.setnumber;
    data.setname = this.setname;
    console.log(data);
  }
  next() {
    this.router.navigate(['/ListOfData']);
  }
}

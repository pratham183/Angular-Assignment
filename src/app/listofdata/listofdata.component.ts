import { Component, OnInit, Input } from '@angular/core';
import { DataserviceService } from '../Services/dataservice.service';
import { Router } from '@angular/router';
const users = [
  {
    name: 'Prathamesh Nandivkar',
    number: '1234567890',
    username: 'pratham123',
    email: 'pratham@gmail.com',
    department: 'Department 1',
  },
  {
    name: 'Prathamesh Nandivkar',
    number: '1234567890',
    username: 'pratham123',
    email: 'pratham@gmail.com',
    department: 'Department 1',
  },

  {
    name: 'Prathamesh Nandivkar',
    number: '1234567890',
    username: 'pratham123',
    email: 'pratham@gmail.com',
    department: 'Department 1',
  },
  {
    name: 'Prathamesh Nandivkar',
    number: '1234567890',
    username: 'pratham123',
    email: 'pratham@gmail.com',
    department: 'Department 1',
  },
  {
    name: 'Prathamesh Nandivkar',
    number: '1234567890',
    username: 'pratham123',
    email: 'pratham@gmail.com',
    department: 'Department 1',
  },
  {
    name: 'Prathamesh Nandivkar',
    number: '1234567890',
    username: 'pratham123',
    email: 'pratham@gmail.com',
    department: 'Department 1',
  },
  {
    name: 'Prathamesh Nandivkar',
    number: '1234567890',
    username: 'pratham123',
    email: 'pratham@gmail.com',
    department: 'Department 1',
  },

  {
    name: 'Prathamesh Nandivkar',
    number: '1234567890',
    username: 'pratham123',
    email: 'pratham@gmail.com',
    department: 'Department 1',
  },
  {
    name: 'Prathamesh Nandivkar',
    number: '1234567890',
    username: 'pratham123',
    email: 'pratham@gmail.com',
    department: 'Department 1',
  },
  {
    name: 'Prathamesh Nandivkar',
    number: '1234567890',
    username: 'pratham123',
    email: 'pratham@gmail.com',
    department: 'Department 1',
  },
  {
    name: 'Prathamesh Nandivkar',
    number: '1234567890',
    username: 'pratham123',
    email: 'pratham@gmail.com',
    department: 'Department 1',
  },
  {
    name: 'Prathamesh Nandivkar',
    number: '1234567890',
    username: 'pratham123',
    email: 'pratham@gmail.com',
    department: 'Department 1',
  },

  {
    name: 'Prathamesh Nandivkar',
    number: '1234567890',
    username: 'pratham123',
    email: 'pratham@gmail.com',
    department: 'Department 1',
  },
  {
    name: 'Prathamesh Nandivkar',
    number: '1234567890',
    username: 'pratham123',
    email: 'pratham@gmail.com',
    department: 'Department 1',
  },
  {
    name: 'Prathamesh Nandivkar',
    number: '1234567890',
    username: 'pratham123',
    email: 'pratham@gmail.com',
    department: 'Department 1',
  },
  {
    name: 'Prathamesh Nandivkar',
    number: '1234567890',
    username: 'pratham123',
    email: 'pratham@gmail.com',
    department: 'Department 1',
  },
  {
    name: 'Prathamesh Nandivkar',
    number: '1234567890',
    username: 'pratham123',
    email: 'pratham@gmail.com',
    department: 'Department 1',
  },

  {
    name: 'Prathamesh Nandivkar',
    number: '1234567890',
    username: 'pratham123',
    email: 'pratham@gmail.com',
    department: 'Department 1',
  },
  {
    name: 'Prathamesh Nandivkar',
    number: '1234567890',
    username: 'pratham123',
    email: 'pratham@gmail.com',
    department: 'Department 1',
  },
  {
    name: 'Prathamesh Nandivkar',
    number: '1234567890',
    username: 'pratham123',
    email: 'pratham@gmail.com',
    department: 'Department 1',
  },
];
@Component({
  selector: 'app-listofdata',
  templateUrl: './listofdata.component.html',
  styleUrls: ['./listofdata.component.scss'],
})
export class ListofdataComponent implements OnInit {
  data = users;
  listofdata: any;
  p = 1;
  count: any;

  constructor(private dataService: DataserviceService, private router: Router) {
    this.count = this.data.length;
  }

  ngOnInit(): void {}

  SendData() {
    this.listofdata = users;

    this.dataService.setData(this.listofdata);

    this.router.navigate(['/Pagination']);
  }
}

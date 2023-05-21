import { Component, Input, OnInit } from '@angular/core';
import { DataserviceService } from '../Services/dataservice.service';

@Component({
  selector: 'app-list-pagination',
  templateUrl: './list-pagination.component.html',
  styleUrls: ['./list-pagination.component.scss'],
})
export class ListPaginationComponent implements OnInit {
  receivedData: any;
  count: any;

  constructor(private dataService: DataserviceService) {
    this.receivedData = this.dataService.getData();
    this.count = this.receivedData.length;
  }

  ngOnInit(): void {}
}

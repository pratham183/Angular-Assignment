import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataserviceService {
  private data: any;

  getData(): any {
    return this.data;
  }

  setData(data: any): void {
    this.data = data;
  }
}

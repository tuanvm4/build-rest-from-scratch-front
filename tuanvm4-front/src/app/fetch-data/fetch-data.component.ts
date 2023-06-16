import { Component } from '@angular/core';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html',
  styleUrls: ['./fetch-data.component.scss']
})
export class FetchDataComponent {

  constructor() {

  }
  private getSomethingDone = (event: any) => {
    console.log("get to know you");
  };
}

import { Component, OnInit } from '@angular/core';
import { MylibService } from './mylib.service';

@Component({
  selector: 'ml-mylib',
  template: `
    <p>
      mylib is cool!
    </p>
    <p>uuid: {{ui.uuid}}<p>
    <div><button (click)="onNewUuid()">Get New UUID</button></div>
  `,
  styles: []
})
export class MylibComponent implements OnInit {

  ui = {
    uuid: "<not set>"
  }

  constructor(
    private uuidservice: MylibService
    ) { }

  ngOnInit() {
  }

  onNewUuid() {
    this.ui.uuid = this.uuidservice.getUUID();
  }

}

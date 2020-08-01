import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';

import { LayoutComponent } from '../layout/layout.component';

import { DATA } from './app.data';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements OnInit {
  public data;

  @ViewChild('layoutRef') private layoutRef: LayoutComponent;

  public ngOnInit(): void {
    this.setData();
  }

  public setData() {
    this.data = this.close(DATA);
  }

  // Make this a utility
  private close(obj) {
    return JSON.parse(JSON.stringify(obj));
  }

  public onReset() {
    this.setData();
    this.layoutRef.reset();
  }
}
import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';

import { LayoutComponent } from '../layout/layout.component';

import { DATA } from './app.data';

import { IUser } from '../interfaces';
import { cloneObject } from '../utilities';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements OnInit {
  public data: IUser[];

  @ViewChild('layoutRef') private layoutRef: LayoutComponent;

  public ngOnInit(): void {
    this.setData();
  }

  public setData() {
    this.data = cloneObject(DATA);
  }

  public onReset() {
    this.setData();
    this.layoutRef.reset();
  }
}
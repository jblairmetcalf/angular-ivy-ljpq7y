/*
 * Abstracts
 * Grid v List toggle
 * Dropdown
 * Icons
 * Make sure works for mobile
 */

import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';

import { CardGridComponent } from '../card-grid/card-grid.component';

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

  @ViewChild('cardGridRef') private _cardGridRef: CardGridComponent;

  public ngOnInit(): void {
    this.setData();
  }

  public setData() {
    this.data = cloneObject(DATA);
  }

  public onReset() {
    this.setData();
    this._cardGridRef.reset();
  }
}
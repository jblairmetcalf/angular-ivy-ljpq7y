/*
 * Abstracts
 * Panel
 * Grid v List toggle
 * Dropdown
 * Icons
 * Make sure works for mobile
 * Slots
 * ngIf
 * Icons
 * Images
 * Filter
 */

/*
<header>
  <ng-content select=".header"></ng-content>
</header>
<main>
  <ng-content select=".main"></ng-content>
</main>
<footer>
  <ng-content select=".footer"></ng-content>
</footer>
*/

import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';

import { ContentComponent } from '../content/content.component';

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

  @ViewChild('contentRef') private _contentRef: ContentComponent;

  public ngOnInit(): void {
    this.setData();
  }

  public setData() {
    this.data = cloneObject(DATA);
  }

  public onReset() {
    this.setData();
    this._contentRef.reset();
  }
}
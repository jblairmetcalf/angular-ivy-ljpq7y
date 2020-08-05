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

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material.module';

import { AppComponent } from './app/app.component';
import { ContentComponent } from './content/content.component';
import { CardComponent } from './card/card.component';
import { ModalComponent } from './modal/modal.component';
import { ActionsComponent } from './actions/actions.component';
import { InfoPanelComponent } from './info-panel/info-panel.component';

import { HighlightDirective } from './directives';
import { UpperCasePipe, LowerCasePipe, InternetCasePipe } from './pipes';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  declarations: [
    AppComponent,
    ContentComponent,
    CardComponent,
    ModalComponent,
    ActionsComponent,
    InfoPanelComponent,
    HighlightDirective,
    UpperCasePipe,
    LowerCasePipe,
    InternetCasePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
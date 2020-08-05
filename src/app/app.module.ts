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
import { PipesModule } from './pipes/pipes.module';
import { DirectivesModule } from './directives/directives.module';
import { ComponentsModule, AppComponent } from './components/components.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    PipesModule,
    DirectivesModule,
    ComponentsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
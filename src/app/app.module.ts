import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from './material.module';

import { AppComponent } from './app/app.component';
import { LayoutComponent } from './layout/layout.component';
import { CardComponent } from './card/card.component';
import { ModalComponent } from './modal/modal.component';
import { ActionsComponent } from './actions/actions.component';

import { HighlightDirective } from './directives';
import { UppercasePipe } from './pipes';

@NgModule({
  imports: [BrowserModule, FormsModule, MaterialModule],
  declarations: [
    AppComponent,
    LayoutComponent,
    CardComponent,
    ModalComponent,
    ActionsComponent,
    HighlightDirective,
    UppercasePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
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
import { UppercasePipe } from './pipes';

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
    UppercasePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
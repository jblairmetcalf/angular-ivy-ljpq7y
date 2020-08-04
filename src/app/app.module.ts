import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app/app.component';
import { LayoutComponent } from './layout/layout.component';
import { CardComponent } from './card/card.component';
import { ModalComponent } from './modal/modal.component';
import { ActionsComponent } from './actions/actions.component';
import { SidePanelHeaderDirective } from './button.directive';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    LayoutComponent,
    CardComponent,
    ModalComponent,
    ActionsComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
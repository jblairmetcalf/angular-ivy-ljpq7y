import { NgModule } from '@angular/core';

import { AppComponent } from './app/app.component';
import { ContentComponent } from './content/content.component';
import { CardComponent } from './card/card.component';
import { ModalComponent } from './modal/modal.component';
import { ActionsComponent } from './actions/actions.component';
import { InfoPanelComponent } from './info-panel/info-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    CardComponent,
    ModalComponent,
    ActionsComponent,
    InfoPanelComponent
  ],
  exports: [
    AppComponent,
    ContentComponent,
    CardComponent,
    ModalComponent,
    ActionsComponent,
    InfoPanelComponent
  ],
  bootstrap: [AppComponent]
})
export class ComponentsModule {}
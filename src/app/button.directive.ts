import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[cdPanelHeader]'
})
export class SidePanelHeaderDirective {
  @HostBinding('class.cd-panel-header') true;
}
import { NgModule } from '@angular/core';

import { UpperCasePipe, LowerCasePipe, InternetCasePipe } from './pipes.pipe';

@NgModule({
  exports: [
    UpperCasePipe,
    LowerCasePipe,
    InternetCasePipe
  ],
})
export class PipesModule {}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'uppercase'})
export class UpperCasePipe implements PipeTransform {
  transform(value: string): string {
    return value.toUpperCase();
  }
}

@Pipe({name: 'lowercase'})
export class LowerCasePipe implements PipeTransform {
  transform(value: string): string {
    return value.toLowerCase();
  }
}

@Pipe({name: 'inyourfacecase'})
export class InYourFaceCasePipe implements PipeTransform {
  transform(value: string): string {
    let res = '';
    [...value].forEach((character, index) => {
      res.concat(res, index % 2 ? character.toLowerCase() : character.toUpperCase());
    });
    return res;
  }
}

import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    UpperCasePipe,
    LowerCasePipe,
    InYourFaceCasePipe
  ],
})
export class PipesModule {}
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({ name: 'trustUrl', pure: false })
export class TrustUrlPipe implements PipeTransform {
  constructor(private domSanitizer: DomSanitizer) {
  }

  transform(content) {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(content);
  }
}

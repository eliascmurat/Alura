import { Directive, ElementRef, OnInit } from '@angular/core';

import { PlatformDetectorService } from './../../../core/platform-detector/platform-detector.service';

@Directive({
  selector: '[appImmediateClick]'
})
export class ImmediateClickDirective implements OnInit {

  constructor(
    private el: ElementRef<any>,
    private platformDetectorService: PlatformDetectorService
  ) { }

  ngOnInit() {
    this.platformDetectorService.isPlatformBrowser() &&
      this.el.nativeElement.click();
  }

}

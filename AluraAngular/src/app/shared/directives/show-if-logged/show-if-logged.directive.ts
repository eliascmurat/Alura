import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { UserService } from 'src/app/core/user/user.service';

@Directive({
  selector: '[showIfLogged]'
})
export class ShowIfLoggedDirective implements OnInit{

  constructor(
    private element: ElementRef<any>,
    private renderer: Renderer2,
    private userService: UserService
  ) { }

  ngOnInit() {
    !this.userService.isLogged() &&
      this.renderer.setStyle(this.element.nativeElement, 'display', 'none');
  }

}

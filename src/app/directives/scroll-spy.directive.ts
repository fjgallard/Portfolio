import { Directive, Injectable, Input, EventEmitter, Output, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: '[appScrollSpy]'
})
export class ScrollSpyDirective {
  @Input() public spiedTags = [];
  @Output() public sectionChange = new EventEmitter<string>();
  private currentSection: string;

  constructor(private el: ElementRef) {}

  @HostListener('scroll', ['$event'])
  onScroll(event: any) {
    let currentSection: string;
    const children = this.el.nativeElement.children;
    const scrollTop = event.target.scrollTop;
    const parentOffset = event.target.offsetTop;

    children.array.forEach(element => {
      if (this.spiedTags.some(spiedTag => spiedTag === element.tagName)) {
        if ((element.offsetTop - parentOffset) <= scrollTop) {
          currentSection = element.id;
        }
      }
    });

    if (currentSection !== this.currentSection) {
        this.currentSection = currentSection;
        this.sectionChange.emit(this.currentSection);
    }
  }
}

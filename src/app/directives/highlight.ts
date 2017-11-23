import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
    selector: '[highlight]'
})
export class HighlightDirective {

    @Input() color: string;
    private el: HTMLElement;

    constructor(el: ElementRef) {
        this.el = el.nativeElement;
    }

    @HostListener('mouseenter') onMouseEnter() {
        this.highlight(this.color || 'gray');
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.highlight(null);
    }

    private highlight(color: string) : void {
        console.clear();
        console.log("background color change by directive");
        this.el.style.background = color;
    }
}

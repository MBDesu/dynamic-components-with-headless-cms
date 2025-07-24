import { Directive, inject, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appComponentHost]',
  standalone: true,
})
export class ComponentHost {
  public readonly viewContainerRef: ViewContainerRef = inject(ViewContainerRef);
}

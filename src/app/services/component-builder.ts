import { ComponentRef, inject, Injectable } from '@angular/core';
import { Builder, BuilderContext } from './builder';
import { CardBuilder } from './card-builder';

@Injectable({
  providedIn: 'root'
})
export class ComponentBuilder implements Builder {
  private cardBuilder = inject(CardBuilder);

  create(context: BuilderContext): ComponentRef<any> {
    switch (context.entry.sys.contentType.sys.id) {
      case 'card':
        return this.cardBuilder.create(context);
      default:
        throw new Error(`Content type '${context.entry.sys.id}' not defined`);
    }
  }
}

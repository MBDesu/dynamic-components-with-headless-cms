import { ComponentRef, ViewContainerRef } from '@angular/core';
import { Entry } from 'contentful';

export interface BuilderContext {
  viewContainerRef: ViewContainerRef;
  entry: Entry;
}

export interface Builder {
  create(context: BuilderContext): ComponentRef<any>;
}

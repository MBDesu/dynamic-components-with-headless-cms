import { ApplicationRef, ComponentRef, createComponent, inject, Injectable } from '@angular/core';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { Card, CardSlots } from '../components/card/card';
import { CardContent } from '../components/card/card-content/card-content';
import { CardHeader, CardHeaderSlots } from '../components/card/card-header/card-header';
import { CardImage } from '../components/card/card-image/card-image';
import { CardSubtitle } from '../components/card/card-subtitle/card-subtitle';
import { CardTitle } from '../components/card/card-title/card-title';
import { Builder, BuilderContext } from './builder';

@Injectable({
  providedIn: 'root',
})
export class CardBuilder implements Builder {
  private readonly appRef = inject(ApplicationRef);

  public create(context: BuilderContext): ComponentRef<Card> {
    const fields = context.entry.fields;
    const keys = Object.keys(CardSlots);
    const elements = new Array(keys.length);
    if (!!fields['title']) {
      elements[CardSlots.header] = this.createCardHeader(context).location.nativeElement.getRootNode().children;
    }
    if (!!fields['image']) {
      elements[CardSlots.image] = this.createCardImage(context).location.nativeElement.getRootNode().children;
    }
    if (!!fields['content']) {
      elements[CardSlots.content] = this.createCardContent(context).location.nativeElement.getRootNode().children;
    }
    console.log(elements.map(el => el[0]));
    return context.viewContainerRef.createComponent(Card, {
      environmentInjector: this.appRef.injector,
      projectableNodes: elements,
    });
  }

  private createCardHeader(context: BuilderContext): ComponentRef<CardHeader> {
    const needsTitles = [ 'title', 'subtitle' ]
      .some((key: string) => !!context.entry.fields[key]);
    const titles = needsTitles ? this.createCardTitles(context) : [];
    const elements = titles.map((title: ComponentRef<any>) => [title.location.nativeElement.firstChild]);
    if (!!titles) {
      return createComponent(CardHeader, {
        environmentInjector: this.appRef.injector,
        projectableNodes: elements,
      });
    } else {
      return createComponent(CardHeader, {
        environmentInjector: this.appRef.injector,
      });
    }
  }

  private createCardTitles(context: BuilderContext): ComponentRef<any>[] {
    const hasTitle = !!context.entry.fields['title'];
    const hasSubtitle = !!context.entry.fields['subtitle'];
    const elements = new Array(Object.keys(CardHeaderSlots).length);
    if (hasTitle) {
      elements[CardHeaderSlots.title] = createComponent(CardTitle, {
        environmentInjector: this.appRef.injector,
        projectableNodes: [[document.createTextNode(context.entry.fields['title'] as string)]],
      });
    }
    if (hasSubtitle) {
      elements[CardHeaderSlots.subtitle] = createComponent(CardSubtitle, {
        environmentInjector: this.appRef.injector,
        projectableNodes: [[document.createTextNode(context.entry.fields['subtitle'] as string)]],
      });
    }
    return elements;
  }

  private createCardImage(context: BuilderContext): ComponentRef<CardImage> {
    const cardImage = createComponent(CardImage, {
      environmentInjector: this.appRef.injector,
    });
    const imgData = JSON.parse(JSON.stringify(context.entry.fields['image'])).fields.file;
    cardImage.setInput('url', imgData.url);
    cardImage.setInput('alt', imgData.description ?? '');
    cardImage.hostView.detectChanges();
    return cardImage;
  }

  private createCardContent(context: BuilderContext): ComponentRef<CardContent> {
    const content = context.entry.fields['content'];
    const contentContainer = document.createElement('div');
    contentContainer.innerHTML = documentToHtmlString(JSON.parse(JSON.stringify(content)));
    return createComponent(CardContent, {
      environmentInjector: this.appRef.injector,
      projectableNodes: [[contentContainer]],
    });
  }

}

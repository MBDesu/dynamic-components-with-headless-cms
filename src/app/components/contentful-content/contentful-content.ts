import { Component, inject, OnInit, viewChild, ViewContainerRef } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ComponentHost } from '../../directives/component-host';
import { ComponentBuilder } from '../../services/component-builder';
import { Contentful } from '../../services/contentful';

@Component({
  imports: [
    ComponentHost,
    MatCardModule,
  ],
  selector: 'app-contentful-content',
  standalone: true,
  styleUrl: './contentful-content.scss',
  templateUrl: './contentful-content.html',
})
export class ContentfulContent implements OnInit {
  private readonly componentBuilder = inject(ComponentBuilder);
  private readonly contentful = inject(Contentful);
  private readonly vcr = viewChild.required(ComponentHost, { read: ViewContainerRef });


  ngOnInit(): void {
    this.contentful.getContent().then(content => {
      this.vcr().clear();
      content.forEach(entry => {
        this.componentBuilder.create({ viewContainerRef: this.vcr(), entry: entry });
      });
    });
  }
}

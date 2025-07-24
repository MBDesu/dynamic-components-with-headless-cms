import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentfulContent } from './contentful-content';

describe('ContentfulContent', () => {
  let component: ContentfulContent;
  let fixture: ComponentFixture<ContentfulContent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentfulContent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentfulContent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

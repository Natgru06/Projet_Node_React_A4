import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowledgeSearchComponent } from './knowledge-search.component';

describe('KnowledgeSearchComponent', () => {
  let component: KnowledgeSearchComponent;
  let fixture: ComponentFixture<KnowledgeSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KnowledgeSearchComponent]
    });
    fixture = TestBed.createComponent(KnowledgeSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

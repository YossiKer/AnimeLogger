import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimeDetailsCardComponent } from './anime-details-card.component';

describe('AnimeDetailsCardComponent', () => {
  let component: AnimeDetailsCardComponent;
  let fixture: ComponentFixture<AnimeDetailsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimeDetailsCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimeDetailsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

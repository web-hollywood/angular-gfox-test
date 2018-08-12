import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerComponent } from './beer.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

describe('BeerComponent', () => {
  let component: BeerComponent;
  let fixture: ComponentFixture<BeerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeerComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render random view component', () => {
    fixture = TestBed.createComponent(BeerComponent);
    fixture.detectChanges();
    const el = fixture.nativeElement.querySelector('golfox-random-view');
    expect(el).toBeDefined();
  });

  it('should render search view component', () => {
    fixture = TestBed.createComponent(BeerComponent);
    fixture.detectChanges();
    const el = fixture.nativeElement.querySelector('golfox-search-view');
    expect(el).toBeDefined();
  });
});

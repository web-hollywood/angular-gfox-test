import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomViewComponent } from './random-view.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';

describe('RandomViewComponent', () => {
  let component: RandomViewComponent;
  let fixture: ComponentFixture<RandomViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandomViewComponent ],
      imports: [
        HttpClientModule,
        NgxSpinnerModule,
        ToastrModule.forRoot()
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render another beer button', () => {
    fixture = TestBed.createComponent(RandomViewComponent);
    fixture.detectChanges();
    const button = fixture.nativeElement.querySelector('button');
    expect(button.innerText).toContain('Another Beer');
  });
});

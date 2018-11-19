import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalpageComponent } from './totalpage.component';

describe('TotalpageComponent', () => {
  let component: TotalpageComponent;
  let fixture: ComponentFixture<TotalpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

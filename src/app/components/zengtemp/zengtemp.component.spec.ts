import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZengtempComponent } from './zengtemp.component';

describe('ZengtempComponent', () => {
  let component: ZengtempComponent;
  let fixture: ComponentFixture<ZengtempComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZengtempComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZengtempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoasGridComponent } from './pessoas-grid.component';

describe('PessoasGridComponent', () => {
  let component: PessoasGridComponent;
  let fixture: ComponentFixture<PessoasGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PessoasGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PessoasGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

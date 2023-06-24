import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoHomeComponent } from './produto-home.component';

describe('ProdutoHomeComponent', () => {
  let component: ProdutoHomeComponent;
  let fixture: ComponentFixture<ProdutoHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutoHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdutoHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

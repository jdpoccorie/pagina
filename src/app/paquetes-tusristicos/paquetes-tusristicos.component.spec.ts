import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaquetesTusristicosComponent } from './paquetes-tusristicos.component';

describe('PaquetesTusristicosComponent', () => {
  let component: PaquetesTusristicosComponent;
  let fixture: ComponentFixture<PaquetesTusristicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaquetesTusristicosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaquetesTusristicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

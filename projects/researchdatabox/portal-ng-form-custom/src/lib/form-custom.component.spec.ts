import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalNgFormCustomComponent } from './form-custom.component';

describe('PortalNgFormCustomComponent', () => {
  let component: PortalNgFormCustomComponent;
  let fixture: ComponentFixture<PortalNgFormCustomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PortalNgFormCustomComponent]
    });
    fixture = TestBed.createComponent(PortalNgFormCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

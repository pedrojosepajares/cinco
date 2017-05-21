import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayZoneComponent } from './play-zone.component';

describe('PlayZoneComponent', () => {
  let component: PlayZoneComponent;
  let fixture: ComponentFixture<PlayZoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayZoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsformComponent } from './newsform.component';

describe('NewsformComponent', () => {
  let component: NewsformComponent;
  let fixture: ComponentFixture<NewsformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

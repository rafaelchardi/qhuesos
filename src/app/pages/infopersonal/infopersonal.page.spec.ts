import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InfopersonalPage } from './infopersonal.page';

describe('InfopersonalPage', () => {
  let component: InfopersonalPage;
  let fixture: ComponentFixture<InfopersonalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfopersonalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InfopersonalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

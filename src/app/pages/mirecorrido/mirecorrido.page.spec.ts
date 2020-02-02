import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MirecorridoPage } from './mirecorrido.page';

describe('MirecorridoPage', () => {
  let component: MirecorridoPage;
  let fixture: ComponentFixture<MirecorridoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MirecorridoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MirecorridoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

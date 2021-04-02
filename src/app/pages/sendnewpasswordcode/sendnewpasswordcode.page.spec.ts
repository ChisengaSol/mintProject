import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SendnewpasswordcodePage } from './sendnewpasswordcode.page';

describe('SendnewpasswordcodePage', () => {
  let component: SendnewpasswordcodePage;
  let fixture: ComponentFixture<SendnewpasswordcodePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SendnewpasswordcodePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SendnewpasswordcodePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

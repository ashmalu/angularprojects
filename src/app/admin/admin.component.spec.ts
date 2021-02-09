import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminComponent } from './admin.component';
import { PipesModule } from 'pipes-module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { templateSourceUrl } from '@angular/compiler';
import { ReactiveFormsModule} from '@angular/forms';

describe('AdminComponent', () => {
  let component: AdminComponent;
  let fixture: ComponentFixture<AdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminComponent ]
    })
    .compileComponents();
  });
  

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
  it('h1 tag', () => {
    // const fixture = TestBed.createComponent(AdminComponent);
    // fixture.detectChanges();
    // const compiled = fixture.debugElement.nativeElement;
    expect(fixture.debugElement.nativeElement.querySelector('h2').textContent).toContain('List of Users');
  });
  
});

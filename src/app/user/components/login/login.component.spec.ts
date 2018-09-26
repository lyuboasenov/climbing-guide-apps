import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Pipe, PipeTransform } from '@angular/core';

import { LoginComponent } from './login.component';

@Pipe({
    name: 'translate'
})
class MockTranslatePipe implements PipeTransform {
    transform(value: any, ...args: any[]): any {
        return value;
    }
}

describe('LoginComponent', () => {
    let component: LoginComponent;
    let fixture: ComponentFixture<LoginComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                LoginComponent,
                MockTranslatePipe
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LoginComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should render the Login title', () => {
        const titleEl = fixture.debugElement.query(By.css('.title')).nativeElement;
        expect(titleEl.innerText).toEqual('login.title');
    });

    it('should render the Login description', () => {
        const descriptionEl = fixture.debugElement.query(By.css('.description')).nativeElement;
        expect(descriptionEl.innerText).toEqual('login.description');
    });
});

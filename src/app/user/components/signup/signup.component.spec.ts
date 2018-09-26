import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Pipe, PipeTransform } from '@angular/core';

import { SingupComponent } from './signup.component';

@Pipe({
    name: 'translate'
})
class MockTranslatePipe implements PipeTransform {
    transform(value: any, ...args: any[]): any {
        return value;
    }
}

describe('SingupComponent', () => {
    let component: SingupComponent;
    let fixture: ComponentFixture<SingupComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                SingupComponent,
                MockTranslatePipe
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SingupComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should render the Singup title', () => {
        const titleEl = fixture.debugElement.query(By.css('.title')).nativeElement;
        expect(titleEl.innerText).toEqual('signup.title');
    });

    it('should render the Singup description', () => {
        const descriptionEl = fixture.debugElement.query(By.css('.description')).nativeElement;
        expect(descriptionEl.innerText).toEqual('signup.description');
    });
});

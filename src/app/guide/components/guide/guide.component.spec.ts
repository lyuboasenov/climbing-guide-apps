import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Pipe, PipeTransform } from '@angular/core';

import { GuideComponent } from './guide.component';

@Pipe({
    name: 'translate'
})
class MockTranslatePipe implements PipeTransform {
    transform(value: any, ...args: any[]): any {
        return value;
    }
}

describe('GuideComponent', () => {
    let component: GuideComponent;
    let fixture: ComponentFixture<GuideComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                GuideComponent,
                MockTranslatePipe
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(GuideComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should render the Home title', () => {
        const titleEl = fixture.debugElement.query(By.css('.title')).nativeElement;
        expect(titleEl.innerText).toEqual('guide.title');
    });

    it('should render the Home description', () => {
        const descriptionEl = fixture.debugElement.query(By.css('.description')).nativeElement;
        expect(descriptionEl.innerText).toEqual('guide.description');
    });
});

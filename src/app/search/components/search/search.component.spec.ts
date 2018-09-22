import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Pipe, PipeTransform } from '@angular/core';

import { SearchComponent } from './search.component';

@Pipe({
    name: 'translate'
})
class MockTranslatePipe implements PipeTransform {
    transform(value: any, ...args: any[]): any {
        return value;
    }
}

describe('SearchComponent', () => {
    let component: SearchComponent;
    let fixture: ComponentFixture<SearchComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
               SearchComponent,
                MockTranslatePipe
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SearchComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should render the Home title', () => {
        const titleEl = fixture.debugElement.query(By.css('.title')).nativeElement;
        expect(titleEl.innerText).toEqual('search.title');
    });

    it('should render the Home description', () => {
        const descriptionEl = fixture.debugElement.query(By.css('.description')).nativeElement;
        expect(descriptionEl.innerText).toEqual('search.description');
    });
});

import { Component } from '@angular/core';

@Component ({
    selector: 'app-categorymenu',
    templateUrl: './categorymenu.component.html',
    styleUrls: ['./categorymenu.component.css']
})
export class CategoryMenuCoponent {
    item: string[] = ['Fashion', 'Beauty', 'Electronic', 'Sports', 'Stationary'];

}
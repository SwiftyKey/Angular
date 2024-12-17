import { Injectable } from '@angular/core';
import { Model, EmployeeItem } from './model.model';

@Injectable({
    providedIn: 'root'
})

export class ModelService {
    private model = new Model();

    getItems() {
        return this.model.items;
    }

    addItem(title: string, image: string) {
        if (title.trim()) {
            this.model.items.push(new EmployeeItem(title, image));
        }
    }
}

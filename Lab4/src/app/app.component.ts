import { Component } from '@angular/core';
import { ModelService } from './model/model.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public title: string = 'angular-lab';

  public itemTitleInput: string = '';
  public itemImageUrlInput: string = '';

  constructor(private modelService: ModelService) { }

  public addItem(): void {
    this.modelService.addItem(this.itemTitleInput, this.itemImageUrlInput);
    this.itemTitleInput = '';
    this.itemImageUrlInput = '';
  }
}

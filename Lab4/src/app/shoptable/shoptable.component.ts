import { Component, OnInit } from '@angular/core';
import { ModelService } from '../model/model.service';

@Component({
  selector: 'app-shoptable',
  templateUrl: './shoptable.component.html',
  styleUrl: './shoptable.component.css'
})

export class ShoptableComponent implements OnInit {
  constructor(public modelService: ModelService) { }

  get items() {
    return this.modelService.getItems();
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}

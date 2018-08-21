import { Input, Component, OnInit } from '@angular/core';
import { DrinkItem } from '../../_models/drink.item'

@Component({
  selector: 'app-drink-items',
  templateUrl: './drink-items.component.html',
  styleUrls: ['./drink-items.component.css']
})
export class DrinkItemsComponent implements OnInit {
  @Input() drinkItem: DrinkItem;


  constructor() { }

  ngOnInit() {
  }

}

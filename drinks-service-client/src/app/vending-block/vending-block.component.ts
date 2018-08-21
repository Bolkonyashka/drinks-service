import { Component, OnInit } from '@angular/core';
import { VendingModel } from '../_models/vending.model';
import { DrinkItem } from '../_models/drink.item';

@Component({
  selector: 'app-vending-block',
  templateUrl: './vending-block.component.html',
  styleUrls: ['./vending-block.component.css']
})
export class VendingBlockComponent implements OnInit {
  vendingModel: VendingModel;
  maxCount: number = 5;

  constructor() { }

  ngOnInit() {
    this.vendingModel = new VendingModel(1000, false, true, false, false);
    var drinkitem = new DrinkItem("https://static.turbosquid.com/Preview/2015/08/07__08_00_18/1aa.jpgecdddeb2-06a6-4164-bbad-788aea764828Original.jpg", "Нюка-Кола без ядерных осадков", 120, 5);
    this.vendingModel.drinksForSale.push(drinkitem);
    var drinkitem = new DrinkItem("https://static.turbosquid.com/Preview/2015/08/07__08_00_18/1aa.jpgecdddeb2-06a6-4164-bbad-788aea764828Original.jpg", "Нюка-Кола", 180, 5);
    this.vendingModel.drinksForSale.push(drinkitem);
    var drinkitem = new DrinkItem("https://static.turbosquid.com/Preview/2015/08/07__08_00_18/1aa.jpgecdddeb2-06a6-4164-bbad-788aea764828Original.jpg", "Нюка-Кола без ядерных осадков", 120, 5);
    this.vendingModel.drinksForSale.push(drinkitem);
    var drinkitem = new DrinkItem("https://static.turbosquid.com/Preview/2015/08/07__08_00_18/1aa.jpgecdddeb2-06a6-4164-bbad-788aea764828Original.jpg", "Нюка-Кола без ядерных осадков", 120, 5);
    this.vendingModel.drinksForSale.push(drinkitem);
  }

  moneyInput(count: number) {
    this.vendingModel.tip.resetStatus();
    this.vendingModel.currentInput += count;
  }

  selectItem(item: DrinkItem) {
    this.vendingModel.tip.resetStatus();
    if (this.vendingModel.selectedDrinks.length < this.maxCount) {
      if (this.vendingModel.currentInput >= this.vendingModel.currentPrice + item.price) {
        this.vendingModel.selectedDrinks.push(item);
        this.vendingModel.currentPrice += item.price;
        item.count -= 1;
        this.vendingModel.currentOutput = this.vendingModel.currentInput - this.vendingModel.currentPrice;
      } else {
        this.vendingModel.tip.prepareTip("Внесено недостаточно средств!");
      }
    } else {
      this.vendingModel.tip.prepareTip("Вы выбрали максимальное количество напитков!")
    }
  }

  buyDrinks() {
    if (this.vendingModel.selectedDrinks.length > 0) {
      this.vendingModel.tip.resetStatus();
      if (this.vendingModel.currentOutput > 0) {
        this.vendingModel.tip.prepareTip("Не забудьте взять вашу сдачу: " + String(this.vendingModel.currentOutput) + " руб");
      }
      this.vendingModel.currentPrice = 0;
      this.vendingModel.currentOutput = 0;
      this.vendingModel.currentInput = 0;
      this.vendingModel.selectedDrinks.length = 0;
    }
  }

}

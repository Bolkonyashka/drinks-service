import { Component, OnInit } from '@angular/core';
import { VendingModel } from '../_models/vending.model';
import { DrinkItem } from '../_models/drink.item';

import { HttpService } from '../_services/http.service';

@Component({
  selector: 'app-vending-block',
  templateUrl: './vending-block.component.html',
  styleUrls: ['./vending-block.component.css']
})
export class VendingBlockComponent implements OnInit {
  vendingModel: VendingModel;
  maxCount: number = 5;
  modelIsReady: boolean = false; //Заглушка на время подгрузки конфигурации автомата

  constructor(private httpService: HttpService) {  }

  ngOnInit() {
    this.httpService.getData("http://localhost:5000/api/vending/0").subscribe(data => {
      this.vendingModel = new VendingModel(data); //конструктор создан специально для преобразования обычных объектов
      this.modelIsReady = true;
      this.httpService.getData("http://localhost:5000/api/drinks").subscribe(data => {
        var dataArray = Array.prototype.slice.call(data, 0);
        this.vendingModel.fillDrinksList(dataArray);
      })
    } );
  }

  moneyInput(count: number) {
    this.vendingModel.tip.resetStatus();
    this.vendingModel.currentInput += count;
    this.vendingModel.currentOutput = this.vendingModel.currentInput - this.vendingModel.currentPrice;
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
      this.vendingModel.cash += this.vendingModel.currentPrice;
      this.httpService.putData("http://localhost:5000/api/vending", this.vendingModel).subscribe();
      for (let drink of this.vendingModel.selectedDrinks) {
        this.httpService.putData("http://localhost:5000/api/drinks", drink).subscribe();
      }
      this.vendingModel.currentPrice = 0;
      this.vendingModel.currentOutput = 0;
      this.vendingModel.currentInput = 0;
      this.vendingModel.selectedDrinks.length = 0;
    }
  }

}

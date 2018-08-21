import { DrinkItem } from './drink.item';
import { VendingTip } from './tip.model';

export class VendingModel{
    cash: number;
    blocked1: boolean;
    blocked2: boolean;
    blocked5: boolean;
    blocked10: boolean;
    selectedDrinks: DrinkItem[] = [];
    drinksForSale: DrinkItem[] = [];
    currentInput: number = 0;
    currentOutput: number = 0;
    currentPrice: number = 0;
    tip: VendingTip;

    constructor(cCash: number, cBlock1: boolean, cBlock2: boolean, cBlock5: boolean,cBlock10: boolean) {
      this.cash = cCash;
      this.blocked1 = cBlock1;
      this.blocked2 = cBlock2;
      this.blocked5 = cBlock5;
      this.blocked10 = cBlock10;
      this.tip = new VendingTip;
    }

    buyButtonIsNotActive() {
      return this.selectedDrinks.length === 0;
    }
  }
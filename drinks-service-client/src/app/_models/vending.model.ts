import { DrinkItem } from './drink.item';
import { VendingTip } from './tip.model';

export class VendingModel{
    id: number = 0;
    cash: number = 100;
    blocked1: boolean = false;
    blocked2: boolean = false;
    blocked5: boolean = false;
    blocked10: boolean = false;
    selectedDrinks: DrinkItem[] = [];
    drinksForSale: DrinkItem[] = [];
    currentInput: number = 0;
    currentOutput: number = 0;
    currentPrice: number = 0;
    tip: VendingTip = new VendingTip();

    constructor(data: any = {}) {
      for (let key in data) {
        if (key in this) {
          this[key] = data[key];
        }
      }
    }

    buyButtonIsNotActive() {
      return this.selectedDrinks.length === 0;
    }
  }
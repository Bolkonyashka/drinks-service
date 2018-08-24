import { Input, Component, OnInit } from '@angular/core';
import { VendingModel } from '../../_models/vending.model';

import { HttpService } from '../../_services/http.service';

@Component({
  selector: 'app-config-block',
  templateUrl: './config-block.component.html',
  styleUrls: ['./config-block.component.css']
})
export class ConfigBlockComponent implements OnInit {
  vendingModel:VendingModel;
  modelIsReady: boolean = false;
  cashIsChanging: boolean = false;
  changesSaved: boolean = false;

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.getData("http://localhost:5000/api/vending/0").subscribe(data => {
      this.vendingModel = new VendingModel(data);
      this.modelIsReady = true;
      });
  }

  changeCash() {
    this.cashIsChanging = true;
  }

  saveNewCash(newCash: number) {
    this.cashIsChanging = false;
    this.vendingModel.cash = newCash;
  }

  changeBlocking(coin: number) {
    switch(coin) {
      case 1:
        this.vendingModel.blocked1 = !this.vendingModel.blocked1;
        break;
      case 2:
        this.vendingModel.blocked2 = !this.vendingModel.blocked2;
        break;
      case 5:
        this.vendingModel.blocked5 = !this.vendingModel.blocked5;
        break;
      case 10:
        this.vendingModel.blocked10 = !this.vendingModel.blocked10;
        break;
      default:
        break;
      }
    }

  saveChanges() {
    this.changesSaved = false;
    this.httpService.putData("http://localhost:5000/api/vending", this.vendingModel).subscribe(data => {
      this.changesSaved = true;
    });
  }

  getCoinStatusAction(stat: boolean) {
    if (stat) {
      return "Разблокировать";
    } else {
      return "Заблокировать";
    }
  }

}

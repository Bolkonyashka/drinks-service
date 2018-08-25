import { Component, OnInit } from '@angular/core';
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

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.httpService.getData("http://localhost:5000/api/vending/0").subscribe(data => {
      this.vendingModel = new VendingModel(data);
      this.modelIsReady = true;
    });
  }

  switchChangeCashMode() {
    this.cashIsChanging = !this.cashIsChanging;
  }

  saveNewCash() {
    this.saveChanges();
    this.switchChangeCashMode();
  }

  changeBlocking(coin: number) {
      this.vendingModel.changeBlockingStatus(coin);
      this.saveChanges();
    }

  saveChanges() {
    this.httpService.putData("http://localhost:5000/api/vending", this.vendingModel).subscribe();
  }

}

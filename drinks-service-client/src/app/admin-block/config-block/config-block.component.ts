import { Component, OnInit } from '@angular/core';
import { VendingModel } from '../../_models/vending.model';

import { HttpService } from '../../_services/http.service';

@Component({
  selector: 'app-config-block',
  templateUrl: './config-block.component.html',
  styleUrls: ['./config-block.component.css']
})
export class ConfigBlockComponent implements OnInit {
  vendingModel:VendingModel; // The main model of the vending machine
  modelIsReady: boolean = false; // For data loading control
  cashIsChanging: boolean = false; // For input mode activate/deactivate

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.loadData();
  }

  /*
    Loads data from the server
  */
  loadData() {
    this.httpService.getData("http://localhost:5000/api/vending/0").subscribe(data => {
      this.vendingModel = new VendingModel(data);
      this.modelIsReady = true;
    });
  }
  
  /*
    Update request to the server
  */
  saveChanges() {
    this.httpService.putData("http://localhost:5000/api/vending", this.vendingModel).subscribe();
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
}

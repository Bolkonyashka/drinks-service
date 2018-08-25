import { Component, OnInit } from '@angular/core';
import { DrinkItem } from '../../_models/drink.item';

import { HttpService } from '../../_services/http.service';

@Component({
  selector: 'app-edit-drinks-block',
  templateUrl: './edit-drinks-block.component.html',
  styleUrls: ['./edit-drinks-block.component.css']
})
export class EditDrinksBlockComponent implements OnInit {
  drinksIsReady: boolean = false;
  drinksList: DrinkItem[] = [];
  tableMode: boolean = true;
  drinkForEdit: DrinkItem = new DrinkItem();

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.loadDrinks();
  }

  loadDrinks() {
    this.drinksList = [];
    this.drinksIsReady = false;
    this.httpService.getData("http://localhost:5000/api/drinks").subscribe(data => {
        var dataArray = Array.prototype.slice.call(data, 0);
        for (let key in dataArray) {
          var drinkItem = new DrinkItem(data[key]);
          this.drinksList.push(drinkItem);
        }
        this.drinksIsReady = true;
      })
  }

  editDrink(drink: DrinkItem) {
    this.drinkForEdit = drink;
  }

  saveChanges() {
    this.httpService.putData("http://localhost:5000/api/drinks", this.drinkForEdit).subscribe();
    this.drinkForEdit = new DrinkItem();
  }

  deleteDrink(drink: DrinkItem) {
    this.httpService.deleteDataByID("http://localhost:5000/api/drinks", drink.id).subscribe(() => {
      var index = this.drinksList.indexOf(drink);
      if (index > -1) {
        this.drinksList.splice(index, 1);
      }
    });
  }

  saveNewDrink() {
    this.httpService.createData("http://localhost:5000/api/drinks", this.drinkForEdit).subscribe(() => {
      this.loadDrinks();
      this.cancel();
    })
  }

  cancel() {
    this.drinkForEdit = new DrinkItem();
    this.tableMode = true;
  }

  switchToCreateMode() {
    this.tableMode = false;
  }
}

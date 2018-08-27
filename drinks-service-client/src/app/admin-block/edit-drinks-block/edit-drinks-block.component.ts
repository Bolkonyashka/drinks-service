import { Component, OnInit } from '@angular/core';
import { DrinkItem } from '../../_models/drink.item';

import { HttpService } from '../../_services/http.service';

@Component({
  selector: 'app-edit-drinks-block',
  templateUrl: './edit-drinks-block.component.html',
  styleUrls: ['./edit-drinks-block.component.css']
})
export class EditDrinksBlockComponent implements OnInit {
  drinksIsReady: boolean = false; // For data loading control
  drinksList: DrinkItem[] = []; // Array of drinks in vending machine
  tableMode: boolean = true; // Flag to change delete-modify/add mode
  drinkForEdit: DrinkItem = new DrinkItem(); // Model for change drink item

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.loadDrinks();
  }

  /*
    Loads data from the server
  */
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
  
  /*
    Update request to the server
  */
  saveChanges() {
    this.httpService.putData("http://localhost:5000/api/drinks", this.drinkForEdit).subscribe();
    this.drinkForEdit = new DrinkItem();
  }
  
  /*
    Delete request to the server
  */
  deleteDrink(drink: DrinkItem) {
    this.httpService.deleteDataByID("http://localhost:5000/api/drinks", drink.id).subscribe(() => {
      var index = this.drinksList.indexOf(drink);
      if (index > -1) {
        this.drinksList.splice(index, 1);
      }
    });
  }
  
  /*
    Create request to the server
  */
  saveNewDrink() {
    this.httpService.createData("http://localhost:5000/api/drinks", this.drinkForEdit).subscribe(() => {
      this.loadDrinks();
      this.cancel();
    })
  }

  editDrink(drink: DrinkItem) {
    this.drinkForEdit = drink;
  }

  cancel() {
    this.drinkForEdit = new DrinkItem();
    this.tableMode = true;
  }

  switchToCreateMode() {
    this.tableMode = false;
    this.drinkForEdit = new DrinkItem();
  }
}

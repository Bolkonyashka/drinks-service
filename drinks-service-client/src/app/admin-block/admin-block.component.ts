import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from "@angular/router";

import { HttpService } from '../_services/http.service';

@Component({
  selector: 'app-admin-block',
  templateUrl: './admin-block.component.html',
  styleUrls: ['./admin-block.component.css']
})
export class AdminBlockComponent implements OnInit {
  paramKey: string;
  keyIsRight: boolean;
  verySecretKey: string = "koko"; // Safety first
  configAction: boolean = true; // Admin panel mode flag

  constructor(private activateRoute: ActivatedRoute, private router:Router, private httpService: HttpService) {
    this.keyChecking();
  }

  ngOnInit() {
  }

  /*
    Key checking. If the key is incorrect - return to the main page
  */
  keyChecking() {
    this.paramKey = this.activateRoute.snapshot.params['key'];
    this.keyIsRight = this.verySecretKey == this.paramKey.toString();
    if (!this.keyIsRight) {
      setTimeout(() => {this.router.navigate(['/'])}, 5000);
    }
  }

  openConfig() {
    this.configAction = true;
  }

  openDrinkList() {
    this.configAction = false;
  }

}

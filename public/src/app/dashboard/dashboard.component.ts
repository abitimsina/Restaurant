import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../restaurant';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
restaurants: Restaurant[] = [];

  constructor(private _http: HttpService, private router: Router) { }

  ngOnInit() {
    this.getAllRestaurant();
  }

getAllRestaurant() {
  this._http.getRestaurants().subscribe((data: Restaurant[]) => {
    this.restaurants = data;
    console.log(data);
  });
}
deleteRestaurant(id: string, index: number) {
  this._http.deleteRestaurants(id).subscribe(data => {
  this.restaurants.splice(index, 1);
  console.log(data)});
}

}

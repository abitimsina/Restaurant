import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Restaurant } from '../restaurant';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {
  restaurants: Restaurant = {name:"", cuisine: "", _id: ""}; //variable: Interface = 2 minimun properties, a ? makes property optional
  constructor(private http: HttpService,   //dependencies
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.restaurants);
    this.route.params.subscribe((params: Params) => {
      this.getOneRestaurant(params.id);
    });
  }
  getOneRestaurant(id: string) {
    this.http.singleRestaurant(id).subscribe((data: Restaurant) => {
      console.log(data);
      this.restaurants = data;
    });
  }
}

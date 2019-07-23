import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Restaurant } from '../restaurant';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  restaurant: Restaurant = { name: '', cuisine: '' };
  cuisine: string;

  constructor(private http: HttpService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.getSingleRestaurant(params.id);
    });
  }

  getSingleRestaurant(id: string) {
    this.http.singleRestaurant(id).subscribe((data: Restaurant) => { console.log(data); this.restaurant = data; });
  }

  editUpdateRestaurant(restaurant: Restaurant) {
    console.log(restaurant);
    this.http.editRestaurants(restaurant).subscribe((data: Restaurant) => {
      this.router.navigate(['/restaurants']);
    });

  }

}

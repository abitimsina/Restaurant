import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../restaurant';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  restaurant: Restaurant = {name: '', cuisine: '' };
  name = false;
  cuisine = false;

  constructor(private http: HttpService, private router: Router) { }

  ngOnInit() {
  }

onSubmit() {
  if (this.restaurant.name.length < 3 || this.restaurant.cuisine.length < 3 ) {
    if (this.restaurant.name.length < 3) {
      this.name = true;
    }
    if (this.restaurant.cuisine.length < 3 ) {
      this.cuisine = true;
    }
    return;
  }

  // if (this.restaurant.cuisine.length < 3) {
  //   this.cuisine = true;
  //   return;
  // }
  console.log(this.restaurant);
  this.http.createRestaurants(this.restaurant).subscribe(data => {
  console.log(this.restaurant);
    console.log("Data =>", data);
    this.router.navigate(['/restaurants']);
  });
}

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Restaurant } from './restaurant';
import { Observable } from 'rxjs';
import { Review } from './review';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {}
  getRestaurants() {
    return this._http.get('/api/restaurants');
  }
  singleRestaurant(id: string) {
    return this._http.get(`/api/restaurants/${id}`);
  }
  createRestaurants(newRestaurant: Restaurant) {
    console.log(newRestaurant);
    return this._http.post('/api/restaurants/create', newRestaurant);
  }
  editRestaurants(restaurant: Restaurant) {
    return this._http.put(`/api/restaurants/update/${restaurant._id}`, restaurant);
  }
  deleteRestaurants(id: string) {
    return this._http.delete(`/api/restaurants/delete/${id}`);
  }
  reviewRestaurant(newReview: Review) {
    return this._http.post('/api/review/create', newReview);
  }
}

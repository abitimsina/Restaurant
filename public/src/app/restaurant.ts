import { Review } from './review';

export interface Restaurant {
  name: string;
  cuisine: string;
  reviews?: Review[];
  _id?: string;
}

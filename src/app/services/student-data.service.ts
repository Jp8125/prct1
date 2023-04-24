import { Injectable } from '@angular/core';
import { IP } from '../Product';

@Injectable({
  providedIn: 'root',
})
export class StudentDataService {
  products: IP[] = [
    {
      id: 1,
      name: 'chocolate',
      Price: 300,
      avalibility: 'available',
      category: 'sweets',
    },
    {
      id: 2,
      name: 'potato',
      Price: 200,
      avalibility: 'available',
      category: 'vegitable',
    },
    {
      id: 3,
      name: 'soap',
      Price: 207,
      avalibility: 'unavailable',
      category: 'home product',
    },
    {
      id: 4,
      name: 'Sting',
      Price: 20,
      avalibility: 'available',
      category: 'Cold drink',
    },
  ];
  constructor() {}
  getProducts():Array<IP>{
    return this.products    
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApartmentService {

  constructor(private httpClient: HttpClient) { }

  findByApartment(){
    return 'kkk bombastico';
  }

  findByName(){
    return 'kkk bombastico';
  }

  findByPlate(){
    return 'kkk bombastico';
  }

/*  findById(){
    return 'kkk bombastico';
  }*/
}

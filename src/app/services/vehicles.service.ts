import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {

  constructor(private httpClient: HttpClient) { }

  findVehicles(location: string){ 
    return this.httpClient.get<any>(`${environment.apiUrl}/vehicles/${location}`);
  }

  createVehicle(formData: Object){
    return this.httpClient.post<any>(`${environment.apiUrl}/vehicles`, formData);
  }

  updateVehicle(formData: Object, location: string){
    return this.httpClient.put<any>(`${environment.apiUrl}/vehicles/${location}`,formData);
  }

  deleteVehicle(location: string){
    return this.httpClient.delete<any>(`${environment.apiUrl}/vehicles/${location}`);
  }
}

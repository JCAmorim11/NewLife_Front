import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WorkerService {

  constructor(private httpClient: HttpClient) { }
  
  findWorker(location: string){
    return this.httpClient.get<any>(`${environment.apiUrl}/worker/${location}`);
  }

  createWorker(formData: Object){
    return this.httpClient.post<any>(`${environment.apiUrl}/worker`,formData);
  }

  updateWorker(location: string, formData: Object){
    return this.httpClient.put<any>(`${environment.apiUrl}/worker/${location}`,formData) 
  }

  deleteWorker(location: string){
    return this.httpClient.delete<any>(`${environment.apiUrl}/worker/${location}`);  
  }
}

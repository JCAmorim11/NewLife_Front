import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VisitorService {
  showMessage(arg0: string) {
    throw new Error('Method not implemented.');
  }

  constructor(private httpClient: HttpClient) {

   }

   findVisitor(location: string){
    return this.httpClient.get<any>(`${environment.apiUrl}/visitor/${location}`) 
   }

   createVisitor(formData: Object){
    return this.httpClient.post<any>(`${environment.apiUrl}/visitor`,formData);
   }

   updateVisitor(location: string, formData: Object){
    return this.httpClient.put<any>(`${environment.apiUrl}/visitor/${location}`,formData);
   }

   deleteVisitor(location: string){
    return this.httpClient.delete<any>(`${environment.apiUrl}/visitor/${location}`)
   }
}

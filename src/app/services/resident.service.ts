import { apartment } from './../model/apartment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { PageEvent } from '@angular/material/paginator';

@Injectable({
  providedIn: 'root'
})
export class ResidentService {

  constructor(private httpClient: HttpClient) { }
  //GET
  findResident(location: string){
    return this.httpClient.get<any>(`${environment.apiUrl}/resident/${location}`);
  }

  //POST
  createResident(formData: Object){
    return this.httpClient.post<any>(`${environment.apiUrl}/resident`, formData);

  }
  
  //PUI
  updateResident(formData: Object){  
      return this.httpClient.put<any>(`${environment.apiUrl}/resident/update`, formData);
  }
      

  //DELETE
  deleteResident(id: number){
    return this.httpClient.delete<any>(`${environment.apiUrl}/resident/${id}`);
  }

  findAllPaginated (
    pager: PageEvent,
    query?: string){
    let params = new HttpParams()
      .append('page', pager.pageIndex)
      .append('size', pager.pageSize);
    if (query) params = params.append('query', query);
    return this.httpClient.get<any>(`${environment.apiUrl}/resident/all`, {params});
    }

    findAll(){
      return this.httpClient.get<any>(`${environment.apiUrl}/resident/all`);
    }

    downloadFile(extension: string, fileName: string){
      this.httpClient.get<any>(`${environment.apiUrl}/reports/residentList/${extension}/${fileName}`,{responseType: 'blob' as 'json'}).subscribe(data => {
        const blob =  new Blob([data], {type: 'application/'+extension})

        var downloadURL =window.URL.createObjectURL(data);
        var link = document.createElement('a');
        link.href= downloadURL;
        link.download = fileName + '.' + extension;
        link.click();

      });
    }

    importFile(file: any){
        const formData = new FormData();
        formData.append('file', file);
        return this.httpClient.post(`${environment.apiUrl}/resident/import`, formData);
    }






















}

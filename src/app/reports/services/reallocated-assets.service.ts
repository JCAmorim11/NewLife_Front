import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Page } from 'src/app/model/page';
import { take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReallocatedAssetsService {

  constructor(private http: HttpClient) { }

  findAssetBranchByDate(dtStart: Date, dtEnd: Date, pageSize: number, pageNumber: number){
   const params = new HttpParams()
        .append('dtStart', `${dtStart.getFullYear()}-${zeroPad(dtStart.getMonth() + 1, 2)}-${zeroPad(dtStart.getDate(), 2)}`)
        .append('dtEnd', `${dtEnd.getFullYear()}-${zeroPad(dtEnd.getMonth() + 1, 2)}-${zeroPad(dtEnd.getDate(), 2)}`)
        .append('page',pageNumber)
        .append('size',pageSize)
        return this.http.get<Page<any>>(`${environment.apiUrl}/api/asset-branch-history`, {params}).pipe(take(1)); 
 
  }
  findAssetBranchByDateExport(dtStart: Date, dtEnd: Date){
      const params = new HttpParams()
      .append('dtStart', `${dtStart.getFullYear()}-${zeroPad(dtStart.getMonth() + 1, 2)}-${zeroPad(dtStart.getDate(), 2)}`)
      .append('dtEnd', `${dtEnd.getFullYear()}-${zeroPad(dtEnd.getMonth() + 1, 2)}-${zeroPad(dtEnd.getDate(), 2)}`)
      return this.http.get<[]>(`${environment.apiUrl}/api/asset-branch-history/export`, {params}).pipe(take(1)); 
  
  }
}
const zeroPad = (num: number, places: number) => String(num).padStart(places, '0');
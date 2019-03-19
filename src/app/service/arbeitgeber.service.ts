import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {catchError, map} from "rxjs/operators";


import {Arbeitgeber} from "../model/arbeitgeber";

@Injectable()
export class ArbeitgeberService {

  private url: string = '/arbeitgeber';

  constructor(private httpClient: HttpClient) { }

  public getArbeitgeber():Observable<Array<Arbeitgeber>>{
    return this.httpClient.get<Array<Arbeitgeber>>(this.url).pipe(
      map((result:any)=>{
        return result._embedded.arbeitgeberList;
      }));
  }

  public putArbeitgeber(arbeitgeber:Arbeitgeber):Observable<Arbeitgeber> {
    console.log(arbeitgeber);
    return this.httpClient.put<Arbeitgeber>(this.url, arbeitgeber).pipe(
      map((result:any)=>{
        return <Arbeitgeber> result;
      }));
  }
}
